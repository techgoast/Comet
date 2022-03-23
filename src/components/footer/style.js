import Styled from "styled-components";
import { Flex } from "../modules/style";

export const Stfooter = Styled.footer`
background-color: var(--text-bold-color);
`;

export const MediaFlex = Styled(Flex)`
@media(max-width: 767px) {
    flex-direction: column;
}
`

export const Stspan = Styled.span`
color: var(--main-color);
`;