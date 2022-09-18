import { ComponentMeta, Story } from "@storybook/react";
import { ResumeItem, ResumeItemProps } from ".";
import { category } from "../../data/category";

export default {
    title: "Components/InfoArea/ResumeItem",
    component: ResumeItem,
    argTypes: {
        title: {
            type: "string",
            defaultValue: "Income"
        },
        value: {
            type: "number",
            defaultValue: 100
        },
    }
} as ComponentMeta<typeof ResumeItem>;

export const Income: Story<ResumeItemProps> = (args) => (
    <ResumeItem {...args} />
);
export const Expense: Story<ResumeItemProps> = (args) => (
    <ResumeItem {...args} />
);
Expense.args = {
    title: "Expense",
    value: -50
};