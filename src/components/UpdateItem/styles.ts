import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: black;
opacity: 0.7;
z-index: 0;
`
export const Container = styled.div`
    background-color: ${AppColors.background};
    color: ${AppColors.lightGray};
    position: fixed;
    top: 17%;
    left: 25%;
    right: 25%;
    width: 50%;
    height: 65%;
    z-index: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 500px) {
        position: fixed;
        top: 30%;
        left: 2.5%;
        right: 2.5%;
        width: 95%;
        height: 50%;
        z-index: 1;
        align-items: center; 
    }
`
export const Row = styled.div`
    margin-top: 7px;
    width: 100%;
    justify-content: center;
    align-items: center;

`;
export const Input = styled.input`
    margin-left: 10%;
    font-size: 25px;
    padding: 5px 3px;
    text-align: center;
    width: 80%;
`
export const Select = styled.select`
    margin-left: 10%;
    font-size: 25px;
    padding: 5px 3px;
    text-align: center;
    width: 80%;
`


export const Label = styled.label`
    margin-left: 40%;
    font-size: 27px;
    text-align: center;
`
export const Title = styled.h1`
    text-align: center;
`
export const Buttons = styled.div`
    margin: 10px;
    width 100%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
`
export const ButtonLeft = styled.div`
  margin: 20px;
  margin-left: 10%;
    
`
export const ButtonsRight = styled.div`
margin: 20px;
margin-right: 10%;
`