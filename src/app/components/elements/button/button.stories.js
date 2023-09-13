import Button from './';

export default {
    title: 'Elemets/Button',
    component: Button,

};

export const Primary = {
    args: {
        children: 'Button',
        type: 'primary'
    },
};

export const Success = {
    args: {
        children: 'Button',
        type: 'success'
    },
};


export const Disabled = {
    args: {
        children: 'Button',
        type: 'primary',
        status: true
    },
};
