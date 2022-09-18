import { ComponentMeta, Story } from "@storybook/react";
import { getCurrentMonth } from "../../helpers/dateFilter";
import { InfoArea, InfoAreaProps } from './index';

export default {
    title: "Components/InfoArea",
    component: InfoArea,
    argTypes: {
        currentMonth: {
            type: "string",
            defaultValue: getCurrentMonth(),
        },
        income: {
            type: "number",
            defaultValue: 2000
        },
        expense: {
            type: "number",
            defaultValue: 1499
        },
        onMonthChange: {
            type: "function",
        }
    }
} as ComponentMeta<typeof InfoArea>;

export const Income: Story<InfoAreaProps> = (args) => (
    <InfoArea {...args} />
)

export const Expense: Story<InfoAreaProps> = (args) => (
    <InfoArea {...args} />
)
Expense.args = {
    expense: 3500,
}
