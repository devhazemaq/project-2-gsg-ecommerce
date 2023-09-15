import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledWraper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  .logo__image {
    position: relative;
    right: 55px;
  }
  .logo__gogo {
    margin-left: -18px;
  }

  width: 327px;
  height: 40px;

  margin: 12px 0;

  border-radius: 5px;

  ${(props) =>
    props.$regby === "google" &&
    `
    background: ${theme.colors.backgroundWhite};
    color: ${theme.colors.colorFtGray800};
    box-shadow: 0px 1px 3px 0px rgba(56, 56, 56, 0.10);
    border: 1px solid ${theme?.colors?.colorGray200};
  `};

  ${(props) =>
    props.$regby === "facebook" &&
    `
    background: ${theme.colors.colorRoyalBlue};
    color: ${theme.colors.backgroundWhite};
    border: none;
  `};

  .body__btn__reg {
    ${(props) =>
      props.$regby === "google" &&
      `
    color: ${theme.colors.colorFtGray800};
  `};

    ${(props) =>
      props.$regby === "facebook" &&
      `
    color: ${theme.colors.backgroundWhite};
  `};
  }
`;
