import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainSubsc = styled.div`
      display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    padding: 37px;
  background: ${theme.colors.colorGray200};

  h4 {
    padding: 7px 0;
  }

  .for__field__cntain{


    display: flex;
    gap: 0.5rem;







    .emil__input_andcom {
    position: relative;
    width: 274px;
    
    .icon__email {
      position: absolute;
      left: 6px;
      top: 9px;

    }
    input{
      width: 274px;
      height: 35px;
      padding: 20px 0px 18px 33px;
      border: 1px solid ${theme.colors.colorGray300};
      border-radius: 6px;
    }
  }


  }

  

`;