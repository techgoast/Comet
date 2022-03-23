import Styled from "styled-components";
import {Stsizing, Flex, Stbutton} from "../modules/style";

export const MediaStsizing = Styled(Stsizing)`
@media(max-width: 991px) {
    margin: 30px auto;
    width: 80%
}
`;

export const MediaFlex= Styled(Flex)`
@media(max-width: 991px) {
    flex-direction: column;
}
`;

export const Imagecontainer = Styled.div`
width: 100%;
height: 550px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
position: relative;
@media(max-width: 991px) {
    margin-bottom: 30px;
}
`;

export const Contactdata = Styled.div`
padding: 30px;
background-color: white;
border-radius: 10px;
position: absolute;
bottom: 50px;
right: 0;
transform: translateX(10%);
`;

export const Contactdetails = Styled.p`
color: var(--text-bold-color);
margin: 20px 0;
font-family: "Poppins", sans-serif;
font-weight: 500;
font-size: 17px;
`;

export const Stform = Styled.form`
width: 100%;
padding: 100px 0;
`;

export const Stinput = Styled.input`
width: calc(50% - 10px);
padding: 10px;
border: none;
outline: none;
border-bottom: 1px solid var(--text-bold-color);
font-family: "Poppins", sans-serif;
color: var(--text-bold-color);
font-size: 15px;
font-weight: 500;
margin-bottom: 20px;
&:nth-of-type(odd) {
    margin-right: 10px;
}
`;

export const Sttxtarea = Styled.textarea`
width: 100%;
padding: 10px;
height: 200px;
border: none;
outline: none;
border-bottom: 1px solid var(--text-bold-color);
font-family: "Poppins", sans-serif;
color: var(--text-bold-color);
font-size: 15px;
font-weight: 500;
`;

export const CusomeStbutton = Styled(Stbutton)`
font-size: 16px;
font-weight: 600;
color: var(--text-bold-color);
margin-top: 20px;
border-radius: 10px;
`;