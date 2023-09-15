import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleWraperHiuser = styled(StyledFlex)`
  width: fit-content;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  background: ${theme.colors.colorPaperLightBlue};
  gap: 0.6rem;
`;


export const StyledHiInfo = styled(StyledFlex)`
  align-items: center;
  width: 164px;
`;

export const StyledHiInfoBody = styled(StyledFlex)`
  flex-direction: column;
  align-items: flex-start;
  gap: 0
`;

