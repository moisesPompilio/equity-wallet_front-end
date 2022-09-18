import { ComponentMeta, Story } from "@storybook/react";
import { TableIten, TableItenProps } from ".";
import { category } from "../../data/category";
import { itens } from "../../data/itens";

export default {
    title: "Components/TableArea/TableIten",
    component: TableIten,
    argTypes: {
        list: {
            defaultValue: itens[0]
        },
        getItens: {
            type: "function"
        },
        listCategory: category,
    }
} as ComponentMeta<typeof TableIten>;

export const Index: Story<TableItenProps> = (args) => (
    <TableIten {...args} />
)