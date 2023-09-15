"use client";

import { Body2, Heading } from "@/components/atoms/typography";
import { StyleMainCartBuy } from "./style";
import CusttomButton from "@/components/atoms/CustomButton";
import PaymentMethods from "@/components/atoms/PaymentMethods";

const CartBuy = () => {
  return (
    <StyleMainCartBuy>
      <div className="buy__deatils">
        <div className="info__deatils">
          <Body2 className="p__name__field">Subtotal:</Body2>
          <Body2 className="amount__value p__dark">$1403.97</Body2>
        </div>
        <div className="info__deatils">
          <Body2 className="p__name__field">Discount:</Body2>
          <Body2 className="amount__value p__crimson"> - $60.00</Body2>
        </div>
        <div className="info__deatils last__field__for__border">
          <Body2 className="p__name__field">Subtotal:</Body2>
          <Body2 className="amount__value p__green">$1403.97</Body2>
        </div>

        <div className="info__deatils contain__total">
          <Body2 className="p__name__field"> Total:</Body2>
          <Heading className="amount__value p__black">$1357.97</Heading>
        </div>
        <div className="btn__checkout__contain">
          <CusttomButton btnColor={"green"} btnText="Checkout" />
        </div>
        <div className="payment__methods__contain">
          <PaymentMethods />
        </div>
      </div>
    </StyleMainCartBuy>
  );
};

export default CartBuy;
