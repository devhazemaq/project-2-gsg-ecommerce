"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Cart Buy ------
export const StyleMainCartBuy = styled.div`
  border: 1px solid ${theme.colors.colorGrayForBorder};
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  margin-top: 15px;
  background: ${theme.colors.backgroundWhite};

  /* -s--- buy deatils --- */
  .buy__deatils {
    padding: 15px;
    .info__deatils {
      display: flex;
      justify-content: space-between;
      padding: 9px 0;

      .p__name__field {
        color: ${theme.colors.colorFtGray600};
      }
      .p__dark {
        color: ${theme.colors.colorFtGray600};
      }
      .p__crimson {
        color: ${theme.colors.colorCrimson};
      }
      .p__green {
        color: ${theme.colors.colorGreen};
      }

      .p__name__field {
        color: ${theme.colors.primaryDark};
      }
    }
    .last__field__for__border {
      border-bottom: 1px solid ${theme.colors.colorGrayForBorder};
      padding-bottom: 1rem;
    }

    .btn__checkout__contain {
      margin-block: 10px;
    }
    .payment__methods__contain {
      display: flex;
      justify-content: center;
      margin: 12px 0px;
    }
  }
  /* -e--- buy deatils --- */
`;
// -e------ Style Main Cart Buy ------
