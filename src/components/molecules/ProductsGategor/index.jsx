"use client";

import { Body, Body2 } from "@/components/atoms/typography";
import { StyleMainGategor } from "./style";
import Image from "next/image";
import { useState } from "react";


const ProductsGategor = () => {

  const [showCategotry, setShowCategotry] = useState(true);

  const handleclick = () => {
    setShowCategotry((prevState)=> 
      prevState === true ? false : true
    );
  } 

  return (
    <StyleMainGategor>
      <div className="dropmenuo__contain">
        <div className="title__type__icon" onClick={handleclick} >
          <Body>Categotry</Body>
          <Image src={"/arowUp.svg"} alt="arowUp" width={24} height={24} />
        </div>
        {showCategotry && (
          <div className="options__dropmenuo">
            <Body2>Mobile accessory</Body2>
            <Body2>Electronics</Body2>
            <Body2>Smartphones</Body2>
            <Body2>Modern tech</Body2>
            <Body2 className="b__see__all">See all</Body2>
          </div>
        )}
      </div>
      
    </StyleMainGategor>
  );
};

export default ProductsGategor;
