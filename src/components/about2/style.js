import Styled from "styled-components";
import {Stsizing, Flex, Sth2, Stp} from "../modules/style";

export const Stimagecontainer = Styled.div`
width: 80%;
height: 400px;
border-radius: 20px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
@media(max-width: 991px) {
    height: 250px;
    margin-bottom: 30px;
    width: 100%;
}
`;

export const CustomeSth2 = Styled(Sth2)`
margin-top: 50px;
padding: 20px 0 10px;
@media(max-width: 991px) {
    padding-right: 0;
}
`;

export const CustomeStp = Styled(Stp)`
padding-left: 30px;
position: relative;
&::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: var(--main-color);
    border-radius: 50%;
    position: absolute;
    left:0;
    top: 50%;
    transform: translateY(-50%);
}
`;

export const MediaStsizing = Styled(Stsizing)`
@media(max-width: 991px) {
    margin: auto;
    width: 80%
}
`;

export const MediaFlex = Styled(Flex)`
@media(max-width: 991px) {
    flex-direction: column;
}
`;

export const Stimagecontainer2 = Styled.div`
width: 80%;
height: 600px;
border-radius: 20px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
@media(max-width: 991px) {
    height: 250px;
    margin-bottom: 30px;
    width: 100%;
}
`;