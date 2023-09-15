"use client"

import { useState } from "react";
import { StyleMainRatings } from "./style";
import Image from "next/image";
import { Body, Body2 } from "@/components/atoms/typography";


const ProductsRatings = () => {  
  const [showRatings, setShowRating] = useState(true);

  const handleclick = () => {
    setShowRating((prevState) => (prevState === true ? false : true));
  };

  return (

    <StyleMainRatings>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick}>
          <Body>Ratings</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showRatings && (
          <div className="options__dropmenuo">
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__metallic" />
              <Image src={"/assets/images/stars/stars2.svg"} alt="rate2" width={93} height={18} />
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__metallic" />
              <Image src={"/assets/images/stars/stars3.svg"} alt="rate3" width={93} height={18} />
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__metallic" />
              <Image src={"/assets/images/stars/stars4.svg"} alt="rate4" width={93} height={18} />
            </div>
            <div className="contain__check__input">
              <input type="checkbox" id="brand__check__metallic" />
              <Image src={"/assets/images/stars/stars5.svg"} alt="rate5" width={93} height={18} />
            </div>

            <Body2 className="b__see__all">See all</Body2>

          </div>
        )}
      </div>
    </StyleMainRatings>
  );
}

export default ProductsRatings