import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyledBtn = styled.button`

  width: 327px;
  height: 37px;
  background: ${(props) => props.$backgrondcolor || theme.colors.backgroundWhite};
  color: ${theme.colors.backgroundWhite};
  box-shadow: 0px 1px 3px 0px rgba(56, 56, 56, 0.10);
  border: none;
  border-radius: 5px;
  
  
`;