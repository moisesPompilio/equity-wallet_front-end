import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Table = styled.table`
width: 100%;
background-color: ${AppColors.darkGray};
padding:10px;
border-radius: 5px;
margin-top: 10px;
color: ${AppColors.lightGray}
`;

export const TableHeadColum = styled.th`
padding: 5px 0;
text-align: center;
`;

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
    width: auto;
    text-align: center;
    font-weight: semi-bold;
    @media screen and (max-width: 500px) {
        font-size: 14px;
    }
    color: ${AppColors.lightGray}
`;
export const Input = styled.input`
    margin-left: 10%;
    font-size: 15px;
    padding: 5px 3px;
    text-align: center;
    width: 80%;
`
export const Select = styled.select`
    margin-left: 10%;
    font-size: 15px;
    padding: 5px 3px;
    text-align: center;
    width: 80%;
`