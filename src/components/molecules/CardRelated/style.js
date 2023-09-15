"use client";
import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Card Related ------
export const StyleMainCardRelated = styled.div`
  margin-block: 1rem;
  padding: 9px;
  background: ${theme.colors.backgroundWhite};

  .h2__title {
    margin-block: 13px;
  }

  .for__all_cards{
    display: flex;
    justify-content: space-between;
  }

  .contain__card {
    width: 168px;
    height: 254px;
    background: ${theme.colors.backgroundWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    border-radius: 7px;

    .img__contain {
      width: 100%;
      height: 155px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.colorGrayLight};
    }
    .info__products {
      margin-bottom: 17px;
      margin-right: 6px;
      .p___2 {
        padding-block: 6px;
      }
      .p__price {
        color: ${theme.colors.colorFtGray500};
      }
    }
  }
`;
// -e------ Style Main Card Related ------
