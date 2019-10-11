const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const { walkSync } = require('./utils');
const mapping = {
    name: 'Prop/Attr',
    type: 'Type',
    default: 'Default',
    description: 'Description',
};
const parseType = function (type, value) {
    if (/string/.test(type)) {
        return `\`"${value}"\``;
    } else if (!/boolean/.test(type) && !value) {
        return '';
    }
    return `\`${value}\``;
};
const toAttrs = function (attrs) {
    let content = '';
    if (attrs.length) {
        content = '### Props/Attrs\n\n';
        const keys = Object.keys(attrs[0]);
        content += '| ';
        content += keys.map((k) => mapping[k]).join(' | ');
        content += ' |\n';
        attrs.forEach((a) => {
            content += '| ';
            content += keys.map((k) => k === 'default' ? parseType(a.type, a[k]) : a[k]).join(' | ');
            content += ' |\n';
        });
        content += '\n';
    }
    return content;
};

const toSlots = function (slots) {
    let content = '';
    if (slots.length) {
        content += '### Slots\n\n';
        slots.forEach(({ name, description }) => {
            content += `#### ${name}\n\n`;
            content += `${description}\n\n`;
        });
        content += '\n';
    }
    return content;
};
const toEvents = function (events) {
    let content = '';
    if (events.length) {
        content += '### Events\n\n';
        events.forEach(({ name, description, params }) => {
            content += `#### ${name}\n\n`;
            content += `${description}\n\n`;
            if (params.length) {
                const keys = Object.keys(params[0]);
                content += '| ';
                content += keys.join(' | ');
                content += ' |\n';
                params.forEach((param) => {
                    content += '| ';
                    content += keys.map((k) => param[k]).join(' | ');
                    content += ' |\n';
                });
                content += '\n';
            }
        });
        content += '\n';
    }

    return content;
};

const toMethods = function (methods) {
    let content = '';
    if (methods.length) {
        content += '### Methods\n\n';
        methods.forEach(({ name, description, params }) => {
            content += `#### ${name}\n\n`;
            content += `${description}\n\n`;
            if (params.length) {
                const keys = Object.keys(params[0]);
                content += '| ';
                content += keys.join(' | ');
                content += ' |\n';
                params.forEach((param) => {
                    content += '| ';
                    content += keys.map((k) => param[k]).join(' | ');
                    content += ' |\n';
                });
                content += '\n';
            }
        });
        content += '\n';
    }

    return content;
};

const iterator = function (dir, file, stats) {
    if (/\.yaml$/.test(file)) {
        try {
            const content = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf8' });
            const metas = YAML.parse(content);
            let md = '';
            metas.forEach(({ name, attrs, slots, events, methods }) => {
                md += `## ${name}\n\n`;
                md += toAttrs(attrs);
                md += toSlots(slots);
                md += toEvents(events);
                md += toMethods(methods);
            });
            fs.writeFileSync(
                path.resolve(dir, 'readme-auto.md'),
                md);
        } catch (err) {
            console.log(err);
            console.log(`${dir}/${file}`);
        }
    }
};

walkSync(path.resolve(__dirname, '../src/components'), iterator);
