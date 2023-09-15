import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainByReg = styled.div`
  margin: 1.3rem 0;
`;

export const FomatSuup = styled(StyledFlex)`
    column-gap: 3.5rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

export const StyleSuppliers = styled.div`

  .suppliers__contain{
    display: flex;
    width: 210px;
    align-items: flex-start;
    gap: 1rem;

    span {
      color: ${theme.colors.colorFtGray500};
    }
  }

`;

