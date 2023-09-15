"use client";

import { theme } from "@/styles/theme";
import styled from "styled-components";

// -s------ Style  Main Payment Features ------

export const StyleMainPaymentFeatures = styled.div`
  display: flex;
  gap: 82px;
  margin-block: 30px;

  .feature__contain {
    width: 242px;
    display: flex;
    gap: 10px;
    .icon__contain {
      display: flex;
      width: 48px;
      height: 48px;
      background: ${theme.colors.colorGray200};
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
    .payment__features__info {
      .p__2 {
        color: ${theme.colors.colorIcSochGray400};
      }
    }
  }
`;

// -e------ Style  Main Payment Features ------
