import Styled from "styled-components";
import { Flex } from "../modules/style";

export const Stheader = Styled.header`
padding: 10px 0;
@media(max-width: 767px) {
    background-color: var(--text-bold-color);
}
`;

export const MediaFlex = Styled(Flex)`
@media(max-width: 767px) {
    flex-direction: column;
}
`;

export const Stlogo = Styled.div`
width: 20%;
`;

export const Stul = Styled.ul`
width: 60%;
list-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;
@media(max-width: 767px) {
    flex-direction: column;
}
`;

export const Stli = Styled.li`
color: ${props => props.active ? "var(--main-color) " : "var(--text-light-color)"};
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 16px;
cursor: pointer;
@media(max-width: 767px) {
    color: ${props => props.active ? "var(--main-color) " : "white"};
    padding: 20px 0;
}
`;