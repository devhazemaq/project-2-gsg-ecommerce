"use client";

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

// -s------ Style Wraper For Super Discount ------
export const StyleWraperForSuperDiscount = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background: ${theme.colors.colorVantaDarkBlue};
  display: flex;

  /* -s---  info discount --- */
  .info__discount {
    background-image: url("/assets/images/page3/buleBack.svg");
    background-size: cover;
    padding: 35px;

    width: 60%;
    height: 100%;
    border-top-right-radius: 290px;
    color: white;
  }
  /* -e---  info discount --- */

  button {
    position: absolute;
    right: 25px;
    top: 40px ;

  }

`;
// -s------ Style Wraper For Super Discount ------
