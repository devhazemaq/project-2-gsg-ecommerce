import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";


export const StyleMainCard = styled.div`
display: flex;
width: 815px ;
/* gap: 1rem; */
/* background: red; */
/* width: 788px ; */
`;

export const StyledCardImgOff = styled(StyledFlex)`
  
  width: 170px;
  height: 254px;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border: 1px solid ${theme.colors.colorGray200};
`;