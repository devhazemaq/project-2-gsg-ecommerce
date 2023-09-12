import { styled } from "styled-components";
import { theme } from "./theme";


export const StyledFlex = styled.div`
  display: flex;
  gap: 1rem;
`; 

export const StyledFlexPageCenterVert = styled(StyledFlex)`
  
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0;

`;

export const StyledButton = styled.button`
  border: none;
  color: ${theme.colors.backgroundWhite};
  background: ${theme.colors.colorDarkBlue};
  height: 40px;
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;