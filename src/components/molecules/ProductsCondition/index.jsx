"use client"

import { Body, Body2 } from "@/components/atoms/typography";
import Image from "next/image";
import { useState } from "react";
import { StyleMainCondition } from "./style";


const ProductsCondition = () => {
  const [showCondition, setShowCondition] = useState(true);

  const handleclick = () => {
    setShowCondition((prevState) => (prevState === true ? false : true));
  };

  return (

    <StyleMainCondition>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick}>
          <Body>Condition</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showCondition && (
          <div className="options__dropmenuo">
            <div className="contain__radio__input">
              <input type="radio" id="brand__check__any" />
              <label htmlFor="brand__check__any">Any</label>
            </div>
            <div className="contain__radio__input">
              <input type="radio" id="brand__check__refurbished" />
              <label htmlFor="brand__check__refurbished">Refurbished</label>
            </div>
            <div className="contain__radio__input">
              <input type="radio" id="brand__check__brandNew" />
              <label htmlFor="brand__check__brandNew">Brand new</label>
            </div>
            <div className="contain__radio__input">
              <input type="radio" id="brand__check__oldItems" />
              <label htmlFor="brand__check__oldItems">Old items</label>
            </div>

            <Body2 className="b__see__all">See all</Body2>

          </div>
        )}
      </div>
    </StyleMainCondition>
  );
}

export default ProductsCondition