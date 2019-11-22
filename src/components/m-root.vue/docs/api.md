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

### Methods

#### walk(func)

广度优先遍历树。当`func`函数有返回值时，停止遍历。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 遍历的处理函数 |

#### find(func)

查找节点实例。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 查找函数。找到第一个返回值为`true`的实例。 |

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
