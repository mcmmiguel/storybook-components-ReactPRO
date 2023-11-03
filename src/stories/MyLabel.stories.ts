import { Meta, StoryObj } from '@storybook/react'
import { MyLabel, MyLabelProps } from '../components/MyLabel';

const meta: Meta<MyLabelProps> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: [
        'autodocs'
    ],
    argTypes: {
        size: {
            control: 'inline-radio'
        }
    },
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Que onda',
    }
};
export const AllCaps: Story = {
    args: {
        label: 'All Caps Label',
        allCaps: true
    }
};
export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        color: 'text-primary',
    }
};
export const CustomColors: Story = {
    args: {
        label: 'Custom colors Label',
        fontColor: '#44k4sl'
    },
};
export const CustomBackgroundColor: Story = {
    args: {
        label: 'Custom colors Label',
        backgroundColor: 'black',
        color: 'text-primary'
    },
};
