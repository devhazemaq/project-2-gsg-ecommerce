import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledNav2 = styled.div`

  position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border-top: 1px solid ${theme.colors.colorGrayForBorder} ;
    border-bottom: 1px solid ${theme.colors.colorGrayForBorder} ; */
    height: 56px;
    

  ::before{
    content: ' ';
    position: absolute;
    height: 1px;
    background: ${theme.colors.colorGrayForBorder} ;
    width: 100vw;
    top: 0;
    left: -10vw;
  }
  ::after{
    content: ' ';
    position: absolute;
    height: 1px;
    background: ${theme.colors.colorGrayForBorder} ;
    width: 100vw;
    bottom: 0;
    left: -10vw;
  }

  .format__nav{
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  li {
    list-style: none;
  }
  .fotAllCate {
    display: flex;
    align-items: center;
  }

  select{
    border: none;
  }
  
  select:focus {
  outline: none;
  }
  
  

`;