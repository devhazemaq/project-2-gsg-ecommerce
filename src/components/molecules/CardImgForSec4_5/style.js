import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledMainCardImgForSec4_5 = styled.div`
  
    display: flex;
    flex-wrap: wrap;
  /* background: red; */

  .StyledContain {
    position: relative;
    width: 202px;
    height: 123px;
    border: 1px solid ${theme.colors.colorGrayForBorder};
  }


  .contain__img {
    width: fit-content;
    position: absolute;
    top: 27px;
    right: 9px;
  }
`;



export const StyledCirdInfo = styled.div`

  position: absolute;
  top: 17px;
  left: 10px;

  p {
    padding-bottom: 9px;
  }

  span {

    display: block;
    color: ${theme.colors.colorFtGray500};
    
  }

  
`;