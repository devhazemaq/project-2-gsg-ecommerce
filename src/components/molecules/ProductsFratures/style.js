"use client";

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyleMainFratures = styled.div`
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

      .contain__check__input{

        padding-block: 7px;
        
        input{
          margin-right: 0.5rem;
        }
        label {
          color: ${theme.colors.colorFtGray600};
        }
      }

      .b__see__all {
        color: ${theme.colors.colorBlueNoor};
        padding: 10px 0 25px 0;
      }
      
    }
    /* -e--- options for dropmenuo--- */
  }
  /* -s------ dropmenuo__contain ------ */
`;
