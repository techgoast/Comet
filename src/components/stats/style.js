import Styled from "styled-components";
import { Flex, Stsizing, Stp } from "../modules/style";

export const MediaFlex = Styled(Flex)`
flex-wrap: wrap;
`;

export const MediaStsizing = Styled(Stsizing)`
@media (max-width: 991px) {
    width: 50%;
    margin-top: 20px;
}
`;

export const MediaStp = Styled(Stp)`
@media (max-width: 991px) {
    text-align: center;
}
`;