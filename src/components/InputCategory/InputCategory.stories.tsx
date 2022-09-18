import { ComponentMeta, Story } from "@storybook/react";
import { InputCategory, InputCategoryProps } from ".";
import { category } from "../../data/category";

export default {
    title: "Components/InputArea/InputCategory",
    component: InputCategory,
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
} as ComponentMeta<typeof InputCategory>;

export const Index: Story<InputCategoryProps> = (args) => (
    <InputCategory {...args} />
)