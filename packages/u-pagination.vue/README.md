# Pagination

## Examples
### Basic

``` html
<u-pagination :total="11"></u-pagination>
<u-pagination :total="11" :current="6"></u-pagination>
```

### Side & Around

Use `side` and `around` properties to change the count of displayed numbers.

``` html
<u-pagination :total="11" :current="6" :side="1" :around="3"></u-pagination>
```

### Readonly & Disabled

``` html
<u-pagination :total="11" readonly></u-pagination>
<u-pagination :total="11" disabled></u-pagination>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| current | Number | `1` | Current page number |
| total | Number | `11` | Total count of pages |
| side | Number | `2` | Count of pages at side position |
| around | Number | `5` | Count of pages around the current position |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @select

Emit when selecting a page.

| Property | Type | Description |
| -------- | ---- | ----------- |
| page | Number | Page number to select |
