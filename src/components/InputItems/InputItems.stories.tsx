import { ComponentMeta, Story } from "@storybook/react";
import { InputItems, InputItemsProps } from ".";
import { category } from "../../data/category";

export default {
    title: "Components/InputArea/InputItems",
    component: InputItems,
    argTypes: {
        listCategory: {
            defaultValue: category
        },
    getItens: {
        type: "function"
    },
    }
} as ComponentMeta<typeof InputItems>;

export const Index: Story<InputItemsProps> = (args) => (
    <InputItems {...args} />
)