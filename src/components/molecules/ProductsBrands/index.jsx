"use client";

import { useState } from "react";
import { StyleMainBrands } from "./style";
import { Body, Body2 } from "@/components/atoms/typography";
import Image from "next/image";

const ProductsBrands = () => {
  const [showBrands, setShowBrands] = useState(true);

  const handleclick = () => {
    setShowBrands((prevState) => (prevState === true ? false : true));
  };

  return (
    <StyleMainBrands>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick}>
          <Body>Brands</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showBrands && (
          <div className="options__dropmenuo">
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__samsung" />
              <label htmlFor="brand__check__samsung">Samsung</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__apple" />
              <label htmlFor="brand__check__apple">Apple</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__huawei" />
              <label htmlFor="brand__check__huawei">Huawei</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__pocco" />
              <label htmlFor="brand__check__pocco">Pocco</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__Lenovo" />
              <label htmlFor="brand__check__lenovo">Lenovo</label>
            </div>

            <Body2 className="b__see__all">See all</Body2>
          </div>
        )}
      </div>
    </StyleMainBrands>
  );
};

export default ProductsBrands;
