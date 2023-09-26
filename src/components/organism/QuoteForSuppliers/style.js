import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledQuateMain = styled.div`
  position: relative;
  height: 446px;
  
  background: linear-gradient(95deg, #0077ff 0%, rgba(0, 209, 255, 0.8) 100%);


  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
  }



  .form__main{
    position: absolute;
    top: 20px;
    right: 0;

    
    width: 491px;
    height: 346px;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;;

    input, textarea {
      /* background: red; */
      width: 440px;
      padding: 10.5px;
      border: 1px solid ${theme.colors.colorGray300};
      border-radius: 6px;
    }
    input:focus,
    textarea:focus {
    outline: none;
    border-color: ${theme.colors.colorGray300}; 
    }

    .contain__filds__Quantiy__select{

      input{
        width: 206px;
        margin-right: 6px;
      }
      select{
        width: 111px ;
        padding: 10.5px;
        border: 1px solid ${theme.colors.colorGray300};
        border-radius: 6px;
      }
      select:focus {
        outline: none;
        border-color: ${theme.colors.colorGray300}; 
      }

    }
    /* for span error */
    .error__prah{
    color: red;
    height: 14px;
    font-size: 15px;
    padding-left: 10.5px;
    font-weight: bold;
  }
  }

`;

export const StyledHeading = styled.div`
  width: 420px;
  color: white;
  position: absolute;
    top: 20px;
    left: 31px;
  
  .for__big__heading{
    color: white;
  }
  .for__span__heading {
    display: block;
    padding-top: 15px;
  }
`;
