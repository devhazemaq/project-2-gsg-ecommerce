import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledWraper = styled(StyledFlex)`

  font-family:${theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  letter-spacing: -0.2px;
  color: ${theme.colors.colorFtGray800};
  
  li{
    display: block;
    padding-inline: 10px;
  }
`;