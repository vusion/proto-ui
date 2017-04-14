# Button

## Examples
### Basic

``` html
<u-button>Button</u-button>
```

### Disabled

``` html
<u-button disabled>Disabled</u-button>
```

### Link

- Use `v-href` directive to add normal link.
- Use `v-to` directive to add [vue-router](https://router.vuejs.org) link.

``` html
<u-button v-href="'https://github.com/vusion/vusion'">v-href</u-button>
<u-button v-to="'/some/router/path'">v-to</u-button>
<u-button v-href="'https://github.com/vusion/vusion'" disabled>v-href</u-button>
```
