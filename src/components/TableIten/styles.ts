import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const TableLine = styled.tr``;

const cor = (expense: boolean) => {
    if (expense) {
        return AppColors.secondary;
    }
    else {
        return AppColors.primary;
    }
}

export const TableColumn = styled.td`
    padding: 10px 0;
    width: auto;
    text-align: center;
    font-weight: semi-bold;
    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`;

export const Category = styled.div<{ expense: boolean }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${AppColors.lightGray};
    
    background: ${props => cor(props.expense)};
`;

export const Value = styled.div<{ expense: boolean }>`
    color: ${props => cor(props.expense)};
    font-weight: bold;
    -webkit-text-stroke: 0.1px ${AppColors.background};
    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`;