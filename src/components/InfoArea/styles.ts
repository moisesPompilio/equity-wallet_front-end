import styled from "styled-components";
import { AppColors } from "../../styles/global";


export const Container = styled.div`
    background-color: ${AppColors.darkGray};
    box-shadow: 0px 0px 2px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -35px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 500px) {
        font-size: 11px;
    }
`;

export const MonthArrow = styled.div`
    color: ${AppColors.lightGray};
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

export const MonthTitle = styled.h2`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;
