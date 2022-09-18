import { ComponentMeta, Story } from "@storybook/react";
import { UpdateCategory, UpdateCategoryProps } from ".";
import { category } from "../../data/category";
import { Category } from "../../types/category";

const Examplecategory: Category = { title: "food", idUser: "87985c5b-4295-4115-961d-1508b1945b3c", expense: true };

export default {
    title: "Components/InputArea/InputCategory/UpdateCategory",
    component: UpdateCategory,
    argTypes: {
        invertUpdate: {type: "function"},
        category: Examplecategory,
        getItens: {type: "function"},
        getCategory: {type: "function"},
    }
} as ComponentMeta<typeof UpdateCategory>;

export const Index: Story<UpdateCategoryProps> = (args) => (
    <UpdateCategory {...args} />
)
