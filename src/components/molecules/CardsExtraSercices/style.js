import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainCardServv = styled(StyledFlex)`
  gap: 0;
  justify-content: space-between;
`;



export const StyleContainCardServ = styled.div`
  
  width: 262px;
  border: 1px solid ${theme.colors.colorGray200};
  border-radius: 6px;


  
  .img__extra{
    background: linear-gradient(rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%);

  }

  .p__contain {
    position: relative;

    p:first-of-type{
      margin-top: 15px;
      padding-left: 15px;
    }
  
    p:last-of-type {
      padding: 9px 0 15px 15px;
    }

    

  }

  .img__icon {
    
    position: absolute;
    right: 23px;
    top: -42px;
    

    background: ${theme.colors.colorIcLightSkyBlue};
    padding: 10px;
    border: 2.4px solid ${theme.colors.backgroundWhite};
    border-radius: 50%
  }
  
  
  


`;