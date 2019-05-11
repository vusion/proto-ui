export const UComboPagination = {
    name: 'u-combo-pagination',
    props: {
        total: { type: Number, default: 11, validator: (value) => Number.isInteger(value) && value >= 0 },
        page: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value > 0 },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
};

export default UComboPagination;
