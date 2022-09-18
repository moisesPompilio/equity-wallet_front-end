import { Container, varianToColor, variantToSize } from "./styles";
export type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

function Button({ variant = "primary", label, size = "medium", ...props}: ButtonProps) {
    const { bgColor, borderColor, color, hover } = varianToColor[variant];
    const { fontSize, padding } = variantToSize[size];
    return (
        <Container
            bgColor={bgColor}
            color={color}
            borderColor={borderColor}
            hoverBgColor={hover.bgColor}
            hoverColor={hover.color}
            fontSize={fontSize}
            padding={padding}
            {...props}
        >
            {label}
        </Container>
    )
}

export default Button;