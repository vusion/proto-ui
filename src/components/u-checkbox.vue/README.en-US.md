# Checkbox

## Examples
### Basic

``` html
<u-checkbox>Checkbox</u-checkbox>
```

### v-model

``` vue
<template>
<u-checkbox v-model="value">{{ value }}</u-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### Disabled

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>Readonly</u-checkbox>
    <u-checkbox :value="true" disabled>Disabled</u-checkbox>
</u-linear-layout>
```

### Indeterminate

``` html
<u-checkbox :value="null">Indeterminate</u-checkbox>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean, null | `false` | Checked status. `null` means indeterminate status.  |
| readonly | Boolean | `false` | Readonly |
| disabled | Boolean | `false` | Disabled |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @input

Emit when checking.

| Property | Type | Description |
| -------- | ---- | ----------- |
| value | Boolean, null | Checked value |

#### @change

Emit when change value.

| Property | Type | Description |
| -------- | ---- | ----------- |
| newValue | Boolean, null | New value |
| oldValue | Boolean, null | Old value |
