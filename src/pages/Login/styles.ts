import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Container = styled.div`
background-color: ${AppColors.background};
color: ${AppColors.lightGray};
min-height: 100vh;
`;

export const Body = styled.body`
margin: auto;
max-width: 90%;
min-height: 90vh;
padding: 10px;
margin-bottom: 10px;
justify-content: center;
align-items: center;

@media screen and (max-width: 500px) {
    max-width: 100%
}
`;

export const AreaLogin = styled.div`
    background-color: ${AppColors.darkGray};
    box-shadow: 0px 0px 2px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 35px;
    display: block;
    align-items: center;
    margin-left: 15%;
    width: 70%;
    @media screen and (max-width: 500px) {
        margin-left: 5%;
        width: 90%
    }
`;

export const Title = styled.h1`
font-size: 30px;
`;

export const Input = styled.input`
font-size: 20px;
height: 40px;
width: 50%;
text-align: center;
@media screen and (max-width: 500px) {
    margin-left: 5%;
    width: 90%
}
`;

export const Center = styled.div`
margin-top: 25px;
width: 100%;
align-items: center;
display: flex;
justify-content: center;
`;
export const Button = styled.div`
    margin: 15px;
`;