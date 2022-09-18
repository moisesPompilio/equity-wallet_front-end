import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Table = styled.table`
width: 100%;
background-color: ${AppColors.darkGray};
padding:20px;
box-shadow: 0px 0px 1px #CCC;
border-radius: 10px;
margin-top: 20px;
color: ${AppColors.lightGray}
`;

export const TableHeadColum = styled.th<{width?: number}>`
widh: ${props => props.width? `${props.width}px` : "auto"};
padding: 10px 0;
text-align: center;

`;