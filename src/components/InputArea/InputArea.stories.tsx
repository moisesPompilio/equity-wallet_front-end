import { ComponentMeta, Story } from "@storybook/react";
import { category } from "../../data/category";
import { InputArea, InputAreaProps } from './index';

export default {
    title: "Components/InputArea",
    component: InputArea,
    argTypes: {
        listCategory: {
            defaultValue: category
        },
    getItens: {
        type: "function"
    },
    getCategory: {
        type: "function"
    },
    }
} as ComponentMeta<typeof InputArea>;

export const Index: Story<InputAreaProps> = (args) => (
    <InputArea {...args} />
)

