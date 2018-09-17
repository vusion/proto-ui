import SingleChoices from '../m-single-choices.vue';

export default {
    name: 'u-tabs',
    childName: 'u-tab',
    extends: SingleChoices,
    props: {
        autoSelect: { type: Boolean, default: true },
        closable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    created() {
        this.$on('select', ($event) => {
            this.router && $event.itemVM.navigate();
        });
    },
    methods: {
        close(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            itemVM.parentVM = undefined;
            const index = this.itemVMs.indexOf(itemVM);
            this.itemVMs.splice(index, 1);

            cancel = false;
            this.$emit('close', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            if (this.selectedVM === itemVM) {
                this.selectedVM = this.itemVMs[index] || this.itemVMs[index - 1];
                const value = this.selectedVM && this.selectedVM.value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }
        },
    },
};
