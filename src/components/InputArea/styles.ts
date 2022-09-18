import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Container = styled.div`
width: 100%;
background-color: ${AppColors.darkGray};
padding:20px;
box-shadow: 0px 0px 1px #CCC;
border-radius: 10px;
margin-top: 20px;
display: flex;
flex-direction: column;
color: ${AppColors.lightGray};
`;

export const IputSpace = styled.div`
width: 100%;
background-color: ${AppColors.darkGray};
padding:10px;
box-shadow: 0px 0px 2px #CCC;
border-radius: 10px;
margin-top: 20px;
display: flex;
flex-direction: column;
`;

export const Title = styled.h1`
font-size: 15px;
margin: 7px;
cursor: pointer;
width: auto;
color: ${AppColors.lightGray}
`;