import Styled from "styled-components";
import {Flex} from "../modules/style";

export const MediaFlex = Styled(Flex)`
flex-wrap: wrap;
`;

export const Imagecontainer = Styled.div`
width: calc(100% / 6);
text-align: center;
@media(max-width: 767px) {
    width: calc(100% / 3);
    margin-top: 20px;
}
`;

export const Stimg = Styled.img`
max-width: 100%;
`;