import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainFooterInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 273px;
    align-items: center;
    background: ${theme.colors.backgroundWhite};
    padding-block: 1.3rem;
    padding-inline: 10%;

`;


export const StyleBrandInfo = styled(StyledFlex) `
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 275px;
    

  p {
    color: ${theme.colors.colorFtGray600};
    padding: 4px 0;
  }


  .footer__icon__soch {
    display: flex;
    gap: 0.7rem;
  }


`;

export const StyleDataInfoServ = styled.div`

  min-width: 78px;
  max-width: 109px;
  height: 137px;
  display: flex;
    flex-direction: column;
    justify-content: space-between;

  .p__info1{
    padding-bottom: 12px;
    font-weight: bold;
  }

  .p__info2{
    /* padding: 10px 0; */
    color: ${theme.colors.colorFtGray500};
  }

`;

export const StyleoStoreImge = styled.div`
    min-width: 78px;
    max-width: 124px;
    height: 137px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 11px;
`;

