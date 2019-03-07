# edit

### select(element)

``` vue
<template>
<div>
    <input ref="input" value="This is a piece of text">
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.input);
        },
    },
};
</script>
```

``` vue
<template>
<div>
    <div ref="container">A piece of text</div>
    <u-button @click="onClick">Select</u-button>
</div>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            selectedText: '',
        };
    },
    methods: {
        onClick() {
            this.selectedText = utils.select(this.$refs.container);
        },
    },
};
</script>
```

### copy(text)

``` vue
<template>
<u-button @click="onClick">Copy</u-button>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return {
            succeeded: undefined,
        };
    },
    methods: {
        onClick() {
            this.succeeded = utils.copy('A piece of text');
        },
    },
};
</script>
```
