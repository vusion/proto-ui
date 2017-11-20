# Textarea

## Examples
### Basic

Most attributes are inherited from `<textarea>` element.

``` html
<u-textarea placeholder="Details" autofocus></u-textarea>
```

### Readonly & Disabled

``` html
<u-linear-layout>
    <u-textarea value="Readonly" readonly></u-textarea>
    <u-textarea value="Disabled" disabled></u-textarea>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String | | The value |
| placeholder | String | | Original attribute |
| maxlength | Number | | Original attribute |
| autofocus | Boolean | | Original attribute |
| readonly | Boolean | | Original attribute |
| disabled | Boolean | | Original attribute |

### Slots

#### (default)
