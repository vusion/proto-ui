# RouterItem

## Examples
### Basic

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| to | String, Object | | The target location of this link |
| replace | Boolean | `false` | Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked |
| exact | Boolean | `false` | Active matching behavior is inclusive match |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |

### Events

#### @navigate

Emit when navigating to other router.

| Property | Type | Description |
| -------- | ---- | ----------- |
| to | Object | The target location of this link |
| replace | Boolean | Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked |
| exact | Boolean | Active matching behavior is inclusive match |
