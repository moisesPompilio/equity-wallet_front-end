import { ComponentMeta, Story } from "@storybook/react";
import { InputCategoryInline, InputCategoryInlineProps } from ".";
import { category } from "../../data/category";

export default {
    title: "Components/InputArea/InputCategory/InputCategoryInline",
    component: InputCategoryInline,
    argTypes: {
        category: {
            defaultValue: category[0]
        },
    getItens: {
        type: "function"
    },
    getCategory: {
        type: "function"
    },
    }
} as ComponentMeta<typeof InputCategoryInline>;

export const Index: Story<InputCategoryInlineProps> = (args) => (
    <InputCategoryInline {...args} />
)