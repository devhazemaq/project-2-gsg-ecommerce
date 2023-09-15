import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledFooter = styled(StyledFlex)`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  background: ${theme.colors.backgroundWhite};
`;