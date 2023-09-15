"use client"

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  width: 666px;
  input{
    width: 421px;
    height: 40px;
    padding-left: 8px;
    border: 1px solid ${theme.colors.colorDarkBlue};
  }

  input:focus {
  outline: none;
  border-color: ${theme.colors.colorDarkBlue}; 
  }

  select{
    width: 145px;
    height: 40px;
    border: 1px solid ${theme.colors.colorDarkBlue};
    color: ${theme.colors.primaryDark};
    font-family: ${theme.fonts.primary};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  select:focus {
  outline: none;
  border-color: ${theme.colors.colorDarkBlue}; 
  }

`;