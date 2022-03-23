import Styled from "styled-components";
import {Flex, Stbutton, Stsizing} from "../modules/style";

export const MediaFlex = Styled(Flex)`
flex-wrap: wrap;
@media(max-width: 767px) {
    flex-direction: column;
}
`;

export const MediaStsizing = Styled(Stsizing)`
@media(max-width: 991px) {
    width: 80%;
    margin: auto
}
`

export const Project = Styled.div`
width: calc((100% - 20px) / 3);
height: 250px;
margin-top: 30px;
@media(max-width: 991px) {
    width: calc((100% - 20px) / 2);
}
@media(max-width: 767px) {
    width: 80%;
}
`;

export const Imagecontainer = Styled.div`
width: 100%;
height: 100%;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
position: relative;
`;

export const Overlay = Styled.div`
width: 100%;
height: 100%;
background-color: #111a5399;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: .5s;
&:hover {
    opacity: 1;
};
`;

export const White = Styled.div`
color: white;
text-align: center;
`;

export const CustomeStbutton = Styled(Stbutton)`
display: block;
margin: 50px auto;
`;