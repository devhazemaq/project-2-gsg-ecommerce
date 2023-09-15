import { StyledFlex } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledInfor = styled(StyledFlex)`

  gap: 0.5rem;
  padding: 4px 12px;
  .infColo{
    color: ${theme.colors.colorDarkBlue};
  }

`;