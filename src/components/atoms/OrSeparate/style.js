import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledWraper = styled.span`

  display: flex;
  align-items: center;
  gap: 10px;
  width: 327px;
  color: ${theme.colors.colorFtGray400};
  padding: 7px 0;

  .span__1 ,
  .span__2{
    display: inline-block;
    width: 144px;
    height: 1px;
    background: ${theme.colors.colorFtGray400};
  }

  .street__line {
    width: 340px;
    height: 1px;
    background: ${theme.colors.colorFtGray400};
    /* padding: 5px 0; */
  }

  
`;