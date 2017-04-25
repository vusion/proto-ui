# TreeView

## Examples
### Basic

It is recommended to use data pattern to generate tags easily.

#### Tag Pattern

``` html
<u-tree-view>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data Pattern

``` html
<u-tree-view :data="[
    { text: 'Node 1', children: [
        { text: 'Node 1.1' },
        { text: 'Node 1.2', children: [
            { text: 'Node 1.2.1' },
            { text: 'Node 1.2.2' },
        ] },
        { text: 'Node 1.3' },
        { text: 'Node 1.4' },
    ] },
    { text: 'Node 2' },
    { text: 'Node 3', children: [
        { text: 'Node 3.1' },
        { text: 'Node 3.2' },
    ] },
]"></u-tree-view>
```

### Value

#### Tag Pattern

``` html
<u-tree-view value="1.2">
    <u-tree-view-node text="Node 1" value="1">
        <u-tree-view-node text="Node 1.1" value="1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2" value="1.2">
            <u-tree-view-node text="Node 1.2.1" value="1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2" value="1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3" value="1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4" value="1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2" value="2"></u-tree-view-node>
    <u-tree-view-node text="Node 3" value="3">
        <u-tree-view-node text="Node 3.1" value="3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2" value="3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data Pattern

``` html
<u-tree-view value="1.2" :data="[
    { text: 'Node 1', value: '1', children: [
        { text: 'Node 1.1', value: '1.1' },
        { text: 'Node 1.2', value: '1.2', children: [
            { text: 'Node 1.2.1', value: '1.2.1' },
            { text: 'Node 1.2.2', value: '1.2.2' },
        ] },
        { text: 'Node 1.3', value: '1.3' },
        { text: 'Node 1.4', value: '1.4' },
    ] },
    { text: 'Node 2', value: '2' },
    { text: 'Node 3', value: '3', children: [
        { text: 'Node 3.1', value: '3.1' },
        { text: 'Node 3.2', value: '3.2' },
    ] },
]"></u-tree-view>
```

### Readonly & Disabled

#### Tag Pattern

``` html
<u-tree-view readonly>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
<u-tree-view disabled>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
<u-tree-view>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2" disabled>
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3" disabled></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2" disabled></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data Pattern

``` html
<u-tree-view :data="[
    { text: 'Node 1', children: [
        { text: 'Node 1.1' },
        { text: 'Node 1.2', disabled: true, children: [
            { text: 'Node 1.2.1' },
            { text: 'Node 1.2.2'}
        ] },
        { text: 'Node 1.3', disabled: true  },
        { text: 'Node 1.4' },
    ] },
    { text: 'Node 2', disabled: true  },
    { text: 'Node 3', children: [
        { text: 'Node 3.1' },
        { text: 'Node 3.2'}
    ]}
]"></u-tree-view>
```

### Cancelable

``` html
<u-tree-view cancelable>
    <u-tree-view-node text="Node 1">
        <u-tree-view-node text="Node 1.1"></u-tree-view-node>
        <u-tree-view-node text="Node 1.2">
            <u-tree-view-node text="Node 1.2.1"></u-tree-view-node>
            <u-tree-view-node text="Node 1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="Node 1.3"></u-tree-view-node>
        <u-tree-view-node text="Node 1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="Node 2"></u-tree-view-node>
    <u-tree-view-node text="Node 3">
        <u-tree-view-node text="Node 3.1"></u-tree-view-node>
        <u-tree-view-node text="Node 3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```
