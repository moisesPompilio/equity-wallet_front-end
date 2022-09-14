import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
    width: auto;
    text-align: center;
    font-weight: semi-bold;
    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
`;