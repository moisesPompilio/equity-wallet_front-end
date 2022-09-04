import styled from "styled-components";
import { AppColors } from "../../styles/global";

type ContainerProps = {
    bgColor: string;
    borderColor: string;
    color: string;
    hoverColor: string;
    hoverBgColor: string;
    fontSize: string;
    padding: string;
}

export const varianToColor = {
    primary: {
        bgColor: AppColors.primary,
        borderColor: AppColors.primary,
        color: AppColors.lightGray,
        hover: {
            bgColor: AppColors.darkPrimary,
            color: AppColors.lightGray
        }
    },
    secondary: {
        bgColor: AppColors.secondary,
        borderColor: AppColors.secondary,
        color: AppColors.lightGray,
        hover: {
            bgColor: AppColors.darkSecondary,
            color: AppColors.lightGray
        }
    },
    outline: {
        bgColor: "transparent",
        borderColor: AppColors.gray,
        color: AppColors.gray,
        hover: {
            bgColor: AppColors.gray,
            color: AppColors.lightGray
        }
    }
}
export const variantToSize = {
    small: {
        fontSize: "12px",
        padding: "10px 16px",
    },
    medium: {
        fontSize: "14px",
        padding: "11px 10px",
    },
    large: {
        fontSize: "16px",
        padding: "12px 24px",
    },
}

export const Container = styled.button<ContainerProps> `
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 1em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.bgColor};
    color: ${props => props.color};

    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.hoverBgColor};
        border: 1px solid ${props => props.hoverBgColor};
        color: ${props => props.hoverColor};   
    }
`;