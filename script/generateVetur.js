const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const { walkSync } = require('./utils');
const tags = {};
const tagsAttributes = {};
const iterator = function (dir, file, stats) {
    if (/\.yaml$/.test(file)) {
        try {
            const content = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf8' });
            const metas = YAML.parse(content);
            metas.forEach(({ name, attrs }) => {
                const p = tags[name] = {};
                if (attrs) {
                    p.attributes = [];
                    attrs.forEach((a) => {
                        p.attributes.push(a['Prop/Attr'] || a['Attr/Prop']);
                        tagsAttributes[`${name}/${a['Prop/Attr'] || a['Attr/Prop']}`] = {
                            type: a.Type,
                            description: a.Description,
                        };
                    });
                }
            });
        } catch (err) {
            console.log(err);
            console.log(`${dir}/${file}`);
        }
    }
};
walkSync(path.resolve(__dirname, '../src/components'), iterator);

fs.writeFile(path.resolve(__dirname, '../tags.json'), JSON.stringify(tags), (err) => {
    if (err)
        throw err;
});

fs.writeFile(path.resolve(__dirname, '../attributes.json'), JSON.stringify(tagsAttributes), (err) => {
    if (err)
        throw err;
});
