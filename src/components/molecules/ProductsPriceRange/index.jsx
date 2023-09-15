"use client";

import { useState } from "react";
import { StyleMainPriceRange } from "./style";
import { Body } from "@/components/atoms/typography";
import Image from "next/image";
import CusttomButton from "@/components/atoms/CustomButton";

const ProductsPriceRange = () => {
  const [showPriceRange, setShowPriceRange] = useState(true);

  const handleclick = () => {
    setShowPriceRange((prevState) => (prevState === true ? false : true));
  };

  return (
    <StyleMainPriceRange>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick}>
          <Body>Price Range</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showPriceRange && (
          <div className="options__dropmenuo">
            <Image
              src={"/assets/images/stars/barRange.png"}
              alt="barRange"
              width={212}
              height={22}
            />

            <div className="kawaki">
              <div className="feild__contain">
                <label>Min</label>
                <input type="text" placeholder="0" />
              </div>
              <div className="feild__contain">
                <label>Max</label>
                <input type="text" placeholder="999999" />
              </div>
            </div>
            <CusttomButton btnColor={"whiteSizeVeryBig"} btnText="Apply" className="btn__apply" />
          </div>
        )}
      </div>
    </StyleMainPriceRange>
  );
};

export default ProductsPriceRange;
