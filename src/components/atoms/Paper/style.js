import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const WraperPaper = styled.div`

  width: 200px;
  height: 115px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  


  ${(props) =>
    props.$papercolor === "orange" && `
    background: ${theme.colors.colorPaperOrangeBrightOrange};
    
    border-radius: 6px;
    
  `};

  ${(props) =>
    props.$papercolor === "turquoise" && `
    background: ${theme.colors.colorPaperTurquoise};
    border-radius: 6px; 
  `};

  .paper__body {
    color: ${theme.colors.backgroundWhite};
    /* padding: 4px 0 4px 20px; */
    padding:  5px 15px
  }


`;