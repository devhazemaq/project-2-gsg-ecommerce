"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style Main Cart Coupon ------
export const StyleMainCartCoupon = styled.div`
  padding: 15px;
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  background: ${theme.colors.backgroundWhite};

  p {
    color: ${theme.colors.colorFtGray600};
    padding-bottom: 10px;
  }
  /* -s--- input aplly contain --- */
  .input__aplly__contain {
    display: flex;
    align-items: center;

    input {
      width: 155px;
      padding: 11.72px 9px;
      color: ${theme.colors.colorFtGray500};
      border: 1px solid ${theme.colors.colorGray300};
    }
    input:focus {
      outline: none;
      border: 1px solid ${theme.colors.colorGray300};
    }
  }
  /* -e--- input aplly contain --- */
`;
// -e------ Style Main Cart Coupon ------
