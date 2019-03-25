## MParent

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| childName | String | `m-child` | 子组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| itemVMs | Array\<MChild\> | `[]` | 子组件集合 |

### Slots

#### (default)

插入`<m-child>`子组件。

## MChild

继承 [MEmitter](../m-emitter)。

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | String | `m-parent` | 父组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent |  | 父组件实例 |

### Slots

#### (default)

插入文件或 HTML。
