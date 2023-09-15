"use client";

import Image from "next/image";
import { StyleMainPaymentFeatures } from "./style";
import { Body2 } from "@/components/atoms/typography";

const PaymentFeatures = () => {
  return (
    <StyleMainPaymentFeatures>
      <div className="feature__contain">
        <div className="icon__contain">
          <Image
            src={"/assets/images/page4/paymentFeatures/lock.svg"}
            alt="iconFeatuer"
            width={24}
            height={24}
          />
        </div>

        <div className="payment__features__info">
          <Body2 className="p__0 p__1">Secure payment</Body2>
          <Body2 className="p__0 p__2">Have you ever finally just </Body2>
        </div>
      </div>
      <div className="feature__contain">
        <div className="icon__contain">
          <Image
            src={"/assets/images/page4/paymentFeatures/lock.svg"}
            alt="iconFeatuer"
            width={24}
            height={24}
          />
        </div>

        <div className="payment__features__info">
          <Body2 className="p__0 p__1">Customer support</Body2>
          <Body2 className="p__0 p__2">Have you ever finally just </Body2>
        </div>
      </div>
      <div className="feature__contain">
        <div className="icon__contain">
          <Image
            src={"/assets/images/page4/paymentFeatures/lock.svg"}
            alt="iconFeatuer"
            width={24}
            height={24}
          />
        </div>

        <div className="payment__features__info">
          <Body2 className="p__0 p__1">Free delivery</Body2>
          <Body2 className="p__0 p__2">Have you ever finally just </Body2>
        </div>
      </div>
    </StyleMainPaymentFeatures>
  );
};

export default PaymentFeatures;
