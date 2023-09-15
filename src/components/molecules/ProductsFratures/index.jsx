"use client"

import { useState } from "react";
import { StyleMainFratures } from "./style";
import { Body, Body2 } from "@/components/atoms/typography";
import Image from "next/image";

const ProductsFratures = () => {
  const [showFratures, setShowFratures] = useState(true);

  const handleclick = () => {
    setShowFratures((prevState) => (prevState === true ? false : true));
  };

  return (

    <StyleMainFratures>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick}>
          <Body>Fratures</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showFratures && (
          <div className="options__dropmenuo">
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__metallic" />
              <label htmlFor="brand__check__metallic">Metallic</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__plasticCover" />
              <label htmlFor="brand__check__apple">Plastic cover</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__ram8" />
              <label htmlFor="brand__check__ram8">8GB Ram</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__superPower" />
              <label htmlFor="brand__check__superPower">Super power</label>
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__largeMemory" />
              <label htmlFor="brand__check__largeMemory">Large Memory</label>
            </div>

            <Body2 className="b__see__all">See all</Body2>

          </div>
        )}
      </div>
    </StyleMainFratures>
  );
};

export default ProductsFratures