"use client";

import { Heading } from "@/components/atoms/typography";
import React from "react";
import { StyleMainCartPage } from "./style";
import CartContainProducts from "@/components/organism/CartContainProducts";
import PaymentFeatures from "@/components/molecules/PaymentFeatures";
import CardSavedForLater from "@/components/molecules/CardSavedForLater";
import { StyledContainer } from "@/components/atoms/Container/style";
import SuperDiscount from "@/components/molecules/SuperDiscount";
import FooterInfo from "@/components/organism/FooterInfo";
import Footer from "@/components/organism/Footer/Footer";

const CartPage = () => {
  return (
    <>
      <StyledContainer>
        <StyleMainCartPage>
          {/* <SuperDiscount/> */}
          <Heading className="h2___title">My cart (3)</Heading>
          <CartContainProducts />
          <PaymentFeatures />
          <CardSavedForLater />
          <SuperDiscount />
        </StyleMainCartPage>

      </StyledContainer>
      <FooterInfo />
      <Footer />

    </>
  );
};

export default CartPage;
