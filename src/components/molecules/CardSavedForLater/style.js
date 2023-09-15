"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Card Saved For Later ------
export const StyleMainCardSavedForLater = styled.div`
  .h2__title {
    margin: 10px 0;
  }

  /* -s--- for all cards --- */
  .for__all__cards {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin-bottom: 1rem;

    .contain__card {
      background: ${theme.colors.backgroundWhite};
      width: 260px;
      height: 382px;
      /* -s--- imgc contain ---  */
      .img__contain {
        width: 260px;
        height: 245px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.colorGrayLight};
        border-radius: 6px;
        img {
          mix-blend-mode: multiply;
        }
      }
      /* -e--- imgc contain ---  */

      /* -s--- imgc contain ---  */
      .info__products {
        h4 {
          padding-block: 10px;
        }
        padding-block: 5px;
      }
      /* -e--- imgc contain ---  */
      /* -s--- move  card contain --- */
      .move__card__contain {
        display: flex;
        align-items: center;
        width: 156.58px;
        gap: 12px;
        padding: 9.3px;
        background: white;
        border: 1px solid ${theme.colors.colorGrayForBorder};
        border-radius: 6px;

        p {
          color: ${theme.colors.colorBlueNoor};
          font-weight: 600;
        }
      }
      /* -e--- move  card contain --- */
    }
  }
`;
// -e------ Card Saved For Later ------
