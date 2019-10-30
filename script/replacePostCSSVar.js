const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const walkSync = function (dirinput, iterator) {
    const dirs = [dirinput];

    while (dirs.length) {
        const dir = dirs.shift();
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
            const f = path.join(dir, file);
            const stat = fs.statSync(f);
            if (stat && stat.isDirectory()) {
                dirs.push(f);
            }
            if (stat) {
                iterator(dir, file, stat);
            }
        });
    }
};
const variablesDeclare = /(^|[^\\])\$(?:\(([A-z][\w-.]*)\)|([A-z][\w-.]*)):/g;
const variables = /\$(?:\(([A-z][\w-.]*)\)|([A-z][\w-.]*))/g;

const iterator = (dir, file, stat) => {
    const fullPath = `${dir}/${file}`;
    if (/module\.css$/.test(file)) {
        transformCSSFile(dir, fullPath);
    }
};
const transformCSSFile = (dir, fullPath) => {
    let content = fs.readFileSync(fullPath, { encoding: 'utf8' });
    try {
        const flag = variables.test(content) || variablesDeclare.test(content);
        if (flag) {
            if (variablesDeclare.test(content)) {
                console.log(fullPath);
                const root = postcss.parse(content);
                // console.log(root);

                const decls = root.nodes
                    .filter((n) => n.type === 'decl')
                    .reduce((accu, node) => {
                        accu[node.prop] = node.value;
                        return accu;
                    }, {});
                const declkeys = Object.keys(decls);
                root.nodes.filter((n) => n.type === 'rule').forEach((rule) => {
                    const keys = rule.nodes.map((n) => {
                        if (n.type === 'decl' && declkeys.includes(n.value)) {
                            return n.value;
                        }
                        return false;
                    }).filter((n) => n);
                    keys.forEach((k) => {
                        const decl = postcss.decl({ prop: `--${k.replace('$', '')}`, value: decls[k] });
                        rule.prepend(decl); // declaration
                    });
                });
                root.nodes
                    .filter((n) => n.type === 'decl').forEach((node) => node.remove());
                content = root.toString();

                // fs.writeFileSync(`${dir}/module-resolved.css`, newcontent);
            }
            content = content.replace(variables, (match, p1, p2, p3, index) =>
                ` var(--${p1 || p2 || p3})`
                // console.log(p3, index)
            );
            fs.writeFileSync(fullPath, content);
        }
    } catch (err) {
        console.log(err);
    }
};
walkSync(path.resolve(__dirname, '../src/components'), iterator);
walkSync(path.resolve(__dirname, '../src/layouts'), iterator);
const schema = path.resolve(__dirname, '../src/base/scheme.css');
let content = fs.readFileSync(schema, { encoding: 'utf8' });
content = content.replace(variablesDeclare, (match, p1, p2, p3, index) => `\n--${p1 || p2 || p3}:`);
fs.writeFileSync(`${path.dirname(schema)}/schema-resolved.css`, content);

const f = path.resolve(__dirname, '../src/base/typography.css');
transformCSSFile(path.dirname(f), f);

walkSync(path.resolve(__dirname, '../node_modules/@vusion/doc-loader/components'), iterator);
walkSync(path.resolve(__dirname, '../node_modules/proto-ui.vusion/src/components'), iterator);
