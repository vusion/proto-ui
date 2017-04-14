# ListView

## Examples
### Basic

``` html
<u-list-view>
    <u-list-view-item>Apple</u-list-view-item>
    <u-list-view-item>Banana</u-list-view-item>
    <u-list-view-item>Cake</u-list-view-item>
</u-list-view>
```

### Value

``` html
<u-list-view value="C">
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```

### Readonly & Disabled

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

### Cancelable

Try to click twice on an item.

``` html
<u-list-view value="C" cancelable>
    <u-list-view-item value="A">Apple</u-list-view-item>
    <u-list-view-item value="B">Banana</u-list-view-item>
    <u-list-view-item value="C">Cake</u-list-view-item>
</u-list-view>
```
