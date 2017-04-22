# ListView

## Examples
### Basic

It is recommended to use tag pattern, which is more flexible than data pattern.

#### Tag Pattern

``` html
<u-list-view>
    <u-list-view-item>Apple</u-list-view-item>
    <u-list-view-item>Banana</u-list-view-item>
    <u-list-view-item>Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view :data="[
    { text: 'Apple' },
    { text: 'Banana' },
    { text: 'Cake' },
]"></u-list-view>
```

### Value

#### Tag Pattern

``` html
<u-list-view value="C">
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view value="C" :data="[
    { text: 'Apple', value: 'A' },
    { text: 'Banana', value: 'B' },
    { text: 'Cake', value: 'C' },
]"></u-list-view>
```

### Readonly & Disabled

#### Tag Pattern

``` html
<u-list-view value="C" readonly>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
<u-list-view value="C" disabled>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
<u-list-view value="C">
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B" disabled>Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

#### Data Pattern

``` html
<u-list-view value="C" :data="[
    { text: 'Apple', value: 'A' },
    { text: 'Banana', value: 'B', disabled: true },
    { text: 'Cake', value: 'C' },
]"></u-list-view>
```

### Cancelable

Try to click twice on an item.

``` html
<u-list-view value="C" cancelable>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```
