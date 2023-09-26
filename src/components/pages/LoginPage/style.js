import { StyledFlexPageCenterVert } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";




export const StyledWrapper = styled(StyledFlexPageCenterVert)`
  width: 100%;
  height: 100vh;
  background: ${theme.colors.background};
    
`;


export const StyledWrapperLogin = styled.div`
  width: 387px;
  height: 520px;
  border-radius: 6px;
  background: ${theme.colors.backgroundWhite};
  padding-left: 30px;
  margin-top: 38px;

`;


export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label{
    width: 327px;
height: 22px;
padding: 0px 251px 3px 0px;


  }
  
  input{
    width: 327px;
    height: 40px;
    border: 1px solid ${theme.colors.colorGray200} ; 
    border-radius: 6px  ;
    padding-left: 7px;
    caret-color: #878787;
    
  }

  .error__prah{
    color: red;
    /* background: orange; */
    height: 14px;
    font-size: 15px;
  }

  .for__chech__login {
    display: flex;
    align-items: center;
    margin-bottom: 6px;

    .check__Login {
      width: 40px;
      height: 24px;
      display: inline;
      padding-left: 0;
      /* padding: 2px 19px 2px 1px; */
    }
    .check__login__lable {
      display: inline;
      width: fit-content;
    }
  }




`;