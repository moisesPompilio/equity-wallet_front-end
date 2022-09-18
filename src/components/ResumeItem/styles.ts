import styled from "styled-components";
import { AppColors } from "../../styles/global";



export const Container = styled.div`
  flex: 1;
  color: ${AppColors.lightGray}
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    color: #888;
    @media screen and (max-width: 500px) {
        font-size: 15px;
        margin: 5px;
    }
`;
export const Info = styled.div<{ color: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color == "primary" ? AppColors.primary : AppColors.secondary};
    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`;