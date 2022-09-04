import Button, { ButtonProps } from ".";
import { Story, ComponentMeta } from "@storybook/react";
export default {
    title: "Buttons/Button",
    component: Button,
    argTypes: {
        label: {
            type: "string",
            defaultValue: "My button"
        },
        variant: {
            options: ["primary", "secondary", "outline"],
            control: {
                type: "select"
            }
        },
        size: {
            options: [ "small", "medium", "large"],
            control: {
                type: "select"
            }
        }
    }
} as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
    <Button {...args} />
);
export const Secondary: Story<ButtonProps> = (args) => (
    <Button {...args} />
);
Secondary.args = {
    variant: "secondary"
};
export const Outline: Story<ButtonProps> = (args) => (
    <Button {...args} />
);
Outline.args = {
    variant: "outline"
};
