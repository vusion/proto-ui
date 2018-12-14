# Input

## Examples
### Basic

Most attributes are inherited from `<input>` element.

``` html
<u-input type="password" maxlength="6" placeholder="Password" autofocus></u-input>
```

### Readonly & Disabled

``` html
<u-linear-layout>
    <u-input value="Readonly" readonly></u-input>
    <u-input value="Disabled" disabled></u-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | type of input, 'text'/'password' |
| value | String | | The value |
| placeholder | String | | Original attribute |
| maxlength | Number | | Original attribute |
| autofocus | Boolean | | Original attribute |
| readonly | Boolean | | Original attribute |
| disabled | Boolean | | Original attribute |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
