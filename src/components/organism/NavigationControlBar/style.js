import { SHOW } from "@/constants";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

// -s------ StyleMainNavCont ------

export const StyleMainNavCont = styled.div`
  display: flex;
  max-width: 926px;
  min-width: 680px;
  height: 62px;
  justify-content: space-between;
  padding-inline: 10px;
  background: ${theme.colors.backgroundWhite};
  margin-top: 20px;
  border-radius: 4px;
  margin-left: 12px;
`;

// -e------ StyleMainNavCont ------

// -s------ StyledDetailsAboutQuantity ------

export const StyledDetailsAboutQuantity = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 9px;

  span:nth-child(3) {
    font-weight: bold;
  }
`;
// -e------ StyledDetailsAboutQuantity ------

// -s------ StyledControl ------

export const StyledControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;

  /* -s------ forChekBox ------ */
  .forChek {
    display: flex;
    gap: 10px;
  }
  /* -e------ forChekBox ------ */

  /* -s------ select ------ */
  select {
    border: 1px solid ${theme.colors.colorGray300};
    width: 172px;
    height: 40px;
    font-weight: 500;
  }

  select:focus {
    outline: none;
    border: 1px solid ${theme.colors.colorGray300};
  }
  /* -e------ select ------ */

  /* -s------ iconContral ------ */
  .iconContral {
    display: flex;
    border: 1px solid ${theme.colors.colorGray300};
    width: fit-content;

    .icon__contol__contail {
      width: 38px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  ${(props) =>
    props.$valueshow === SHOW.VERTICAL &&
    `
    .icon__1 {
      background: ${theme.colors.colorGray200};
    }
  `};
  ${(props) =>
    props.$valueshow === SHOW.HORIZONTAL &&
    `
      .icon__2 {
        background: ${theme.colors.colorGray200};
      }
      

    `};
  /* -e------ iconContral ------ */
`;
// -e------ StyledControl ------
