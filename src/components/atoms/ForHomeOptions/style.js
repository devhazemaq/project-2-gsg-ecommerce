import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledHomeOptions = styled.div`
  
  ul {
    width: 215px;
    
  }

  li {
    list-style: none;
    /* padding: 10px;
    padding-bottom: 18px; */
    padding: 14px 0 14px 5px ;
    border-radius: 4px;
  }
  
  .li__style {
    background: ${theme.colors.colorLightBlue};
    font-weight: bold;
  }

  .style__body2__typo {
    color: ${theme.colors.colorFtGray600}
  }
  
  
`;
