import Styled from "styled-components";


export const Flex = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Container = Styled.div`
width: 85%;
margin: auto;
@media(max-width: 767px) {
    width: 100%;
}
`;

export const Stbutton = Styled.button`
padding: 10px 30px;
background-color: ${props => props.green ? "var(--main-color) " : "var(--button-color)"};
color: ${props => props.green ? "var(--text-bold-color) " : "white"};
border: none;
outline: none;
border-radius: 30px;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 16px;
cursor: pointer;
`;

export const Stsection = Styled.section`
padding: 50px 0;
`;

export const Stsizing = Styled.div`
width: ${props => props.width};
margin: ${props => props.margin};
`

export const Stp = Styled.p`
color: ${props => props.light ? "var(--text-light-color)" :  props.white ? "white" : "var(--text-bold-color)"};
line-height: ${props => props.lhi};
font-family: ${props => props.ffamily};
font-size: ${props => props.fsize};
font-weight: ${props => props.fweight};
margin: ${props => props.margin};
@media(max-width: 767px) {
    font-size: ${props => props.mediafsize}
}
`;

export const Sth2 = Styled.h2`
color: var(--text-bold-color);
font-family: 'Yeseva One', cursive;
font-size: 40px;
@media(max-width: 991px) {
    font-size: 25px;
}
`;

export const Sth3 = Styled.h3`
color: var(--text-bold-color);
font-family: 'Yeseva One', cursive;
font-size: 25px;
@media(max-width: 991px) {
    font-size: 20px;
}
`;

