"use client";

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleMainPriceRange = styled.div`
  max-width: 230px;
  min-width: 140px;
  background: ${theme.colors.backgroundPrimary};
  border-top: 1px solid ${theme.colors.colorGray300};

  /* -s------ dropmenuo__contain ------ */
  .dropmenuo__contain {
    /* -s--- title__type__icon--- */
    .title__type__icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding-bottom: 10px; */
      padding: 8px 3px 8px 0;
      p {
        font-weight: bold;
      }
    }
    /* -e--- title__type__icon--- */

    /* -s--- options for dropmenuo--- */
    .options__dropmenuo {
      .kawaki {
        display: flex;
        justify-content: space-between;
        .feild__contain {
          display: flex;
          flex-direction: column;
          width: 110px;
          gap: 7px;

          input {
            height: 40px;
            padding-left: 9px;
            border: 1px solid ${theme.colors.colorGray300};
            border-radius: 6px;
          }
          input:focus {
            outline: none;
            border-color: ${theme.colors.colorGray300};
          }
        }
      }
      

      button {
        border: 1px solid ${theme.colors.colorGray300}; 
        margin-top: 0.6rem;
        margin-bottom: 1.8rem;
      }
    }
    /* -e--- options for dropmenuo--- */
  }
  /* -s------ dropmenuo__contain ------ */
`;
