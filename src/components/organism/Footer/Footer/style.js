import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleMainFooter = styled(StyledFlex)`
  justify-content: space-between;
  background: aqua;
  height: 68px;
  align-items: center;
  border-top: 1px solid ${theme.colors.colorGray300};
  background: ${theme.colors.colorGray200};

  margin-bottom: 8px;
  padding-inline: 10%;

`;