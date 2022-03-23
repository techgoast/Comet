import Styled from "styled-components";
import {Stsizing, Stp, Flex} from "../modules/style";

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
height: 250px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
margin-bottom: 30px;
position: relative;
`;

export const Author = Styled.p`
width: 175px;
height: 40px;
border-radius: 9px;
background-color: white;
color: var(--text-bold-color);
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-style: italic;
font-size: 13px;
position: absolute;
bottom: 10px;
right: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

export const CustomeStp = Styled(Stp)`
color: #027c5d;
cursor: pointer;
font-weight: bold;
`;

export const CustomeFlex = Styled(Flex)`
justify-content: flex-start;
margin: 10px 0;
`;

export const Photoissuer = Styled(Stp)`
background-color: white;
`;