import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";



export const StyleWraperDeals = styled.div`
  width: 290px;
  height: 254px;
  padding: 17px;
  border: 1px solid ${theme.colors.colorGrayForBorder};
  
  .deal__body{
    color: ${theme.colors.colorFtGray500};
    padding-bottom: 10px;
    margin-top: -7px;
  }

  
`;


export const StyledTime = styled(StyledFlex)`
    gap: 0.5rem;
    width: 204px;

  .time__contain{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 50px;
    border-radius: 4px;
    background: ${theme.colors.colorFtGray800} ;
    color: ${theme.colors.backgroundWhite};
  }

  .time__number,
  .time__type{
    font-family: ${theme.fonts.primary};
    font-style: normal;
    line-height: normal;
    
  }
  
  .time__number{
    font-size: 16px;
    font-weight: 700;
  }

  .time__type {
    font-size: 12px;
    font-weight: 400;
  }

`;