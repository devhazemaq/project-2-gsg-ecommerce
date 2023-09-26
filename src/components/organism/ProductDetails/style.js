"use client";

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

// -s------ Style Main Product ------
export const StyleMainProduct = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: ${theme.colors.backgroundWhite};
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
`;
// -e------ Style Main Product ------

// -s------ Prod All Images ------
export const ProdAllImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;

  .img__main__big {
    width: 380px;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.colorGray300};
    box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);

  }
  /* -s--- contain small imgs --- */
  .contain__small__imgs {
    width: 380px;
    display: flex;
    justify-content: space-between;
    .imgs__main__small {
      width: 50px;
      height: 50px;
      border: 1px solid ${theme.colors.colorGray300};
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .img__border {
      border: 1px solid ${theme.colors.colorFtGray600};
    }
  }
  /* -s--- contain small imgs --- */
`;
// -e------ Prod All Images ------

// -s------ Prod All Info ------
export const ProdAllInfo = styled.div`
  /* -s--- do stock ---*/
  .do__stock {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 390px;
    padding: 5px;
    /* height: 380px; */

    .state__stock {
      display: flex;
      gap: 9px;
      align-items: center;
      .stock__tit {
        color: ${theme.colors.colorGreen};
      }
    }

    /* -s--- tqyeam info --- */
    .tqyeam__info {
      display: flex;
      gap: 8px;
      padding-block: 4px;
      span {
        color: ${theme.colors.colorOrange};
      }
      .small__circle {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        display: block;
        margin-top: 5px;
        background: ${theme.colors.colorGray700};
      }
      .stock__p {
        color: ${theme.colors.colorFtGray500};
      }
    }
    /* -e--- tqyeam info --- */

    /* -s---  price list --- */
    .price__list {
      display: flex;
      column-gap: 1.6em;
      background: ${theme.colors.colorPeach};
      .first__price__list,
      .second__price__list,
      .third__price__list {
        width: 95px;
        padding: 5px 5px 5px 10px;
      }
      .first__price__list {
        h4 {
          color: ${theme.colors.colorCrimson};
        }
        span {
          color: ${theme.colors.colorFtGray800};
        }
      }
      .second__price__list,
      .third__price__list {
        h4 {
          color: ${theme.colors.primaryDark};
        }
        span {
          color: ${theme.colors.colorFtGray800};
        }
        border-left: 1px solid ${theme.colors.colorGray800};
      }
    }
    /* -e---  price list --- */

    /* -s--- group details list --- */
    .group__details__list {
      .details__list {
        background: white;
        padding: 8px;
        display: flex;
        column-gap: 1.2rem;
        border-bottom: 1px solid ${theme.colors.colorGrayForBorder};
        .data__1 {
          width: 100px;

          color: ${theme.colors.colorFtGray500};
        }
        .data__2 {
          color: ${theme.colors.colorFtGray600};
        }
      }
      .details__list__2,
      .details__list__3 {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid ${theme.colors.colorGrayForBorder};

        .fild__row {
          display: flex;
          background: white;
          padding: 8px;
          display: flex;
          column-gap: 1.2rem;
          .data__1 {
            width: 100px;
            color: ${theme.colors.colorFtGray500};
          }
          .data__2 {
            color: ${theme.colors.colorFtGray600};
          }
        }
      }
    }
    /* -e--- group details list --- */
  }
  /* -e--- do stock ---*/
`;
// -e------ Prod All Info ------

// -s------ prod Supplier Info ------
export const ProdSupplierInfo = styled.div`
  width: fit-content;


  /* -s--- supp details --- */
  .supp_details {
    width: 280px;
    display: flex;
    flex-direction: column;
    padding: 8px 12px 12px;
    gap: 9px;
    border: 1px solid ${theme.colors.colorGrayForBorder};
    border-radius: 3px;
    /* box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08); */


    .supp__name__avtar {
      display: flex;
      column-gap: 1rem;
      align-items: flex-start;
      .contain__avtar {
        background: ${theme.colors.colorLightTurquoise};
        width: fit-content;
        padding: 13px;
        border-radius: 6px;
      }
      .name__info {
      }
    }
    .supp__country__info {
      padding-block: 10px;
      border-top: 1px solid ${theme.colors.colorGrayForBorder};

      .data__0 {
        display: flex;
        gap: 16px;
        padding-block: 5.5px;
        img {
          width: 20px;
        }
        p {
          width: fit-content;
          color: ${theme.colors.colorFtGray500};
        }
      }
    }

    .contain__btns {
      padding-left: 16px;

      button:first-of-type{
        margin: 10px 0 0;
      }
      button:last-of-type{
        margin: 10px 0;
      }
    }

    /* #style__btn {
      margin-left: 26px;
    } */

    .style__btn__whiet {
      border: 1px solid ${theme.colors.colorGrayForBorder};
    }
  }
  /* -e--- supp details --- */
  /* -s--- contain save later --- */
  .contain__save__later {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    gap: 6px;
    margin-top: 12px;

    p {
      color: ${theme.colors.colorBlueNoor};
    }
  }
  /* -e--- contain save later --- */
`;
// -e------ prod Supplier Info ------
