import styled from "styled-components";
import { AppColors } from "../../styles/global";

export const Container = styled.div`
background-color: ${AppColors.background};
color: ${AppColors.lightGray};
min-height: 100vh;
`;

export const Header = styled.header`
background-color: ${AppColors.header};
text-align: center;
box-shadow: 0px 0px 1px #CCC;
height: 100px;
`;

export const HeaderText = styled.h1`
margin: 0;
padding: 0;
padding-top: 30px
`;

export const Body = styled.body`
margin: auto;
max-width: 90%;
min-height: 90vh;
padding: 10px;
margin-bottom: 10px;

@media screen and (max-width: 500px) {
    max-width: 100%
}
`;