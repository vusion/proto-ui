const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const walkSync = function (dir, iterator) {
    const dirs = [dir];

    while (dirs.length) {
        var dir = dirs.shift();
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
const tags = {}
const tagsAttributes = {}
const iterator = function(dir, file, stats) {
    if (/\.yaml$/.test(file)) {
        try{
            const content = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf8' });
            const metas = YAML.parse(content);
            metas.forEach(({name, attrs}) => {
                const p = tags[name] = {};
                if(attrs){
                    p.attributes = []
                    attrs.forEach((a) => {
                        p.attributes.push(a['Prop/Attr'] || a['Attr/Prop']);
                        tagsAttributes[`${name}/${a['Prop/Attr'] || a['Attr/Prop']}`] = {
                            type: a['Type'],
                            description: a['Description']
                        }
                    })
                }

            })
        }catch(err){
            console.log(`${dir}/${file}`);
            return
        }

    }
}
walkSync(path.resolve(__dirname, '../src'), iterator);


fs.writeFile(path.resolve(__dirname, '../tags.json'), JSON.stringify(tags), (err) => {
    if(err)
        throw err;
})

fs.writeFile(path.resolve(__dirname, '../attributes.json'), JSON.stringify(tagsAttributes), (err) => {
    if(err)
        throw err;
})
