import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleMainNavpar = styled.div`
    background: ${theme.colors.backgroundWhite};
    /* margin-bottom: 1.3rem ; */
    padding-inline:10%;
`;

export const StyledKawaki = styled(StyledFlex)`
    justify-content: space-between;
    gap: 0;
    padding: 1.5rem 0;
`;
export const StyledKawakiSec = styled(StyledFlex)`
    justify-content: space-between;
    gap: 0;
`;


