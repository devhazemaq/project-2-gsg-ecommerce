"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Product Description ------
export const StyleMainProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 40px;
`;
// -e------ Style Main Product Description ------

// -s------ Right Part ------
export const RightPart = styled.div`
  width: 880px;
  /* height: 880px; */
  background: ${theme.colors.backgroundWhite};
  position: relative;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  /* -s--- valbel data ---  */

  .valbel__data {
    position: relative;
    display: flex;

    column-gap: 1rem;
    background: ${theme.colors.backgroundWhite};
    padding: 15px;
    border: 1px solid ${theme.colors.colorGray300};
    /* margin: 15px; */
  }

  .valbel__data p:first-child {
    color: ${theme.colors.colorDarkBlue};
    font-weight: bold;
  }

  .prah__1::after {
    content: " ";
    width: 100px;
    position: absolute;
    left: 10px;
    bottom: -1px;
    height: 1px;
    background: ${theme.colors.colorDarkBlue};
  }

  /* -e--- valbel data ---  */

  /* -s--- p desctuption ---  */

  .p__desctuption {
    p {
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: -0.2px;
    }
  }
  /* -e--- p desctuption ---  */

  /*-s--- all product specifications --- */
  .all__product__specifications {
    .specif__1 {
      display: flex;
      p {
      }
    }
    .specif__1 P:first-child {
      background: ${theme.colors.colorGray200};
      width: 204px;
      padding: 6px 6px 6px 9px;
      border: 1px solid ${theme.colors.colorGrayForBorder};
    }
    .specif__1 P:last-child {
      background: ${theme.colors.backgroundWhite};
      width: 320px;
      padding: 6px 6px 6px 9px;
      border: 1px solid ${theme.colors.colorGrayForBorder};
    }
  }
  /*-e--- all product specifications --- */

  /* -s--- identical specifications --- */
  .identical__specifications {
    margin-block: 18px;

    .datelis__1 {
      display: flex;
      gap: 16px;
      padding-block: 5px;

      p {
        colors: ${theme.colors.colorFtGray600};
      }
    }
  }
  /* -e--- identical specifications --- */
`;
// -e------ Right Part ------

// -s------ Left Part ------
export const LeftPart = styled.div`
  width: 280px;
  height: fit-content;
  background: ${theme.colors.backgroundWhite};
  border: 1px solid ${theme.colors.colorGrayForBorder};
  border-radius: 6px;

  .p__title {
    font-weight: bold;
    margin: 10px;
  }

  /* -s--- for__all_cards --- */
  .for__all_cards {
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contain__card {
    display: flex;
    gap: 1rem;
    .img__contain {
      width: 80px;
      height: 80px;
      border: 1px solid ${theme.colors.colorGrayForBorder};
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info__products {
      .p___2 {
        padding-block: 6px;
      }

      .p__price {
        color: ${theme.colors.colorFtGray500};
      }
    }
  }
  /* -e--- for__all_cards --- */
`;
// -e------ Left Part ------
