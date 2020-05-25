export const UTransfer = {
    name: 'u-transfer',
    props: {
        source: { type: Array, default: () => [] },
        target: { type: Array, default: () => [] },
    },
    data() {
        return {
            sourceValues: [],
            targetValues: [],
        };
    },
    methods: {
        transfer(source, target, values) {
            const transfer = [];
            for (let i = 0; i < source.length; i++) {
                const item = source[i];
                if (values.includes(item.value)) {
                    source.splice(i--, 1);
                    target.push(item);
                    transfer.push(item);
                }
            }
            const newTransferValues = Array.from(values);
            values.splice(0, values.length);
            this.$emit('transfer', {
                source,
                target,
                transfer,
                transferValues: newTransferValues,
            }, this);
            this.$emit('change', {
                source,
                target,
                transfer,
                transferValues: newTransferValues,
            }, this);
        },
        forward() {
            this.transfer(this.source, this.target, this.sourceValues);
        },
        reverse() {
            this.transfer(this.target, this.source, this.targetValues);
        },
    },
};

export default UTransfer;
