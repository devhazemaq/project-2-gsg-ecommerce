import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleMainNav = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: flex-end;
  padding-top: 16px;
  margin-bottom: 23px;

  select {
    border: 1px solid ${theme.colors.colorGray300};
    border-radius: 6px;
    width: 172px;
    height: 40px;
    font-weight: 500;
  }

  select:focus {
    outline: none;
    border: 1px solid ${theme.colors.colorGray300};
  }

  .contain__btns__nav {
    display: flex;

    span {
      display: flex;
      width: 44px;
      height: 40px;
      background: ${theme.colors.backgroundWhite};
      font-weight: 600;
      border-radius: 6px;

      align-items: center;
      flex-direction: row;
      justify-content: center;
      border: 1px solid ${theme.colors.colorGray300};

      p {
        width: fit-content;
      }
    }
  }
`;
