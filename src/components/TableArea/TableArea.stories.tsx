import { ComponentMeta, Story } from "@storybook/react";
import { TableArea, TableAreaProps } from ".";
import { category } from "../../data/category";
import { itens } from "../../data/itens";

export default {
    title: "Components/TableArea",
    component: TableArea,
    argTypes: {
        list: {
            defaultValue: itens
        },
        getItens: {
            type: "function"
        },
        listCategory: category,
    }
} as ComponentMeta<typeof TableArea>;

export const Index: Story<TableAreaProps> = (args) => (
    <TableArea {...args} />
)
