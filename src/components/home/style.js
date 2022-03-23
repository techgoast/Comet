import Styled from "styled-components";
import {Flex, Stsizing} from "../modules/style";

export const MediaFlex = Styled(Flex)`
@media(max-width: 991px) {
    flex-direction: column;
}
`;

export const MediaSizing = Styled(Stsizing)`
@media(max-width: 991px) {
    width: 80%
}
`;

export const Sth1 = Styled.h1`
color: var(--text-bold-color);
font-family: 'Yeseva One', cursive;
font-size: 50px;
@media(max-width: 991px) {
    font-size: 30px;
}
`;

export const Stimagecontainer = Styled.div`
height: 600px;
border-radius: 0 80px 0 80px;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
position: relative;
@media(max-width: 991px) {
    margin-top: 20px;
    height: 400px
}
`;

export const Sthappycl = Styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
bottom: 100px;
left: 0;
transform: translateX(-50%);
@media(max-width: 767px) {
    transform: translateX(-20%);
}
`;
