## MRoot

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| nodeName | String | `m-node` | 节点组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| nodeVMs | Array\<MNode\> | `[]` | 首层节点组件集合 |

### Slots

#### (default)

插入`<m-node>`子组件。

## MNode

继承 [MEmitter](../m-emitter)。

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| rootName | String | `m-root` | 根组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| rootVM | MRoot |  | 根组件实例 |
| parentVM | MNode |  | 父节点实例 |
| nodeVMs | Array\<MNode\> | `[]` | 子节点组件集合 |

### Slots

#### (default)

插入`<m-node>`子组件。
