import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledFormRegster = styled.form`

label{
  padding: 1px 0;
  }

  input{
    width: 327px;
    height: 35px;
    border: 1px solid ${theme.colors.colorGray200} ; 
    border-radius: 6px  ;
    padding-left: 10px;
    caret-color: #878787;
  }

  .error__prah{
    color: red;
    height: 14px;
    font-size: 15px;
    margin-bottom: 4px;
  }

`;

export const FormatStyledField =styled(StyledFlex)``;

export const StyledField = styled(StyledFlex)`
    flex-direction: column;
    gap: 0.4rem;
    
  .regsName{
    color: ${theme.colors.primaryDark};
    font-family: ${theme.fonts.primary};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.2px;
  }
  
  .regsName,
  .regsSuName{
    width: 156px;
    height: 35px;
  }
`;

export const FormatStyledCheck = styled(StyledFlex)`
  
  align-items: center;
  height: 17px;
  gap: 0;
  padding: 15px 0 0 0;
  margin-bottom: 7px;
  .regs__checkbox {
    width: 30px;
    height: 17px;
  }

`;