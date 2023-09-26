"use client";

import { theme } from "@/styles/theme";

const { default: styled } = require("styled-components");

// -s------ Style Main Cart Contain Products ------
export const StyleMainCartContainProducts = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: #333; */
`;
// -e------ Style Main Cart Contain Products ------

// -s------ Left Part ------
export const LeftPart = styled.div`
  width: 800px;
  min-height: 522px;
  background: ${theme.colors.backgroundWhite};
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);

  /* -s--- All Contents Of Card --- */
  .AllContentsOfCard {
    padding: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-height: 522px;

    .product__of__card {
      width: 780px;
      display: flex;
      gap: 14px;
      justify-content: space-between;
      border-bottom: 1px solid ${theme.colors.colorGrayForBorder};

      .kawaki__for__img__contain__and__details__product__of__card {
        display: flex;
        gap: 1rem;

        .img__contain {
          width: 75px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${theme.colors.colorGray200};
          mix-blend-mode: multiply;
          border: 1px solid ${theme.colors.colorGrayForBorder};
          border-radius: 6px;
        }
        /* -s--- details product of card */
        .details__product__of__card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
          margin-right: 15px;
          margin-bottom: 1.2rem;
          .p__info {
            color: ${theme.colors.colorFtGray500};
          }
        }

        .contain__btns {
          display: flex;
          gap: 8px;

          button {
            box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
          }
        }
      }
    }
    /* -e--- details product of card */

    /* -s--- contain for select price --- */
    .contain__for__select__price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      padding-right: 12px;
      p {
        font-weight: 500;
      }

      select {
        width: 123px;
        height: 40px;
        border: 1px solid ${theme.colors.colorGrayForBorder};
        color: ${theme.colors.primaryDark};
        font-family: ${theme.fonts.primary};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      select:focus {
        outline: none;
        border-color: ${theme.colors.colorGrayForBorder};
      }
    }
    /* -e--- contain for select price --- */

    /* -e--- All Contents Of Card --- */
  }
  /* -s--- btn back contain --- */

  .btn__back__contain {
    width: 159px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${theme.colors.colorBlueNoor};
    border-radius: 6px;
    margin-bottom: 14px;
    margin-left: 15px;
    p {
      color: ${theme.colors.backgroundWhite};
    }
  }
  /* -e--- btn back contain --- */
`;
// -e------ Left Part ------

// -s------ Reight Part ------
export const ReightPart = styled.div`
  width: 260px;
  height: 380px;
`;
// -e------ Reight Part ------
