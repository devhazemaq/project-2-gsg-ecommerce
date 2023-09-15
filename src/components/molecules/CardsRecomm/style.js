import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainCardsRec = styled(StyledFlex)`
    gap: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export const StyledCardRecomm = styled.div`
  width: 210px;
  height: 310px;
  border: 1px solid ${theme.colors.colorGray200};
  position: relative;
  background: #00c4ff;


  .for__img {
    display: flex;
    justify-content: center;
    align-items: center;
    


  }

  
  .contain__prah{
    position: absolute;
    bottom: 20px;
    left: 15px;
  
    p:first-of-type{
    font-weight: bold;

  }
    .b__info {
      color: ${theme.colors.colorFtGray500};
    }

    p {
      padding: 7px 0;
    }


  }

`;