"use client";

import { Body, Body2, Heading, TitleH4 } from "@/components/atoms/typography";
import { StyleMainCardSavedForLater } from "./style";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, API_URL_RELATEDPRODUCTS } from "@/config/api";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedAction } from "@/redux/slices/related";
import Swal from "sweetalert2";

const CardSavedForLater = () => {

  // savedForLater

  const dispatch = useDispatch();

  const { related } = useSelector((state) => state.related);

  useEffect(() => {
    if (!related.length) {
      dispatch(getRelatedAction(API_URL_RELATEDPRODUCTS));
    }
  }, []);

  const handleAlrtsucceed = () => {
    // succeed
    Swal.fire(
      '',
      'Succeed',
      'success'
    )

  }

  return (
    <StyleMainCardSavedForLater>
      <Heading className="h2__title">Related products</Heading>
      <div className="for__all__cards">

        {related?.slice(0,4).map((card) => (
          <div key={card?.id} className="contain__card">
          <div className="img__contain">
            <img
              src={card?.image}
              alt="img"
              // width={150}
              // height={180}
              // width={185}
              // height={190}
            />
          </div>
          <div className="info__products">
            <TitleH4>{card?.price}</TitleH4>
            <Body2>{card?.title__1}</Body2>
            <Body2>{card?.title__2}</Body2>
          </div>
          <div className="move__card__contain" onClick={handleAlrtsucceed}>
            <Image
              src={"/assets/images/page4/shoppingCartBlue.svg"}
              alt="shoppingCartBlue"
              width={22}
              height={22}
            />
            <Body>Move to cart</Body>
          </div>
        </div>
        ))}

        
      </div>
    </StyleMainCardSavedForLater>
  );
};

export default CardSavedForLater;
