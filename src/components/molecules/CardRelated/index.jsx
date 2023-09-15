"use client";

import { Body2, Heading } from "@/components/atoms/typography";
import { API_URL, API_URL_RELATEDPRODUCTS } from "@/config/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleMainCardRelated } from "./style";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedAction } from "@/redux/slices/related";

const CardRelated = () => {
  const dispatch = useDispatch();

  const { related } = useSelector((state) => state.related);

  useEffect(() => {
    if (!related.length) {
      dispatch(getRelatedAction(API_URL_RELATEDPRODUCTS));
    }
  }, []);

  return (
    <StyleMainCardRelated>
      <Heading className="h2__title">Related products</Heading>

      <div className="for__all_cards">
        {related?.map((card) => (
          <div key={card?.id} className="contain__card">
            <div className="img__contain">
              <Image src={card?.image} alt="image" width={125} height={133} />
            </div>
            <div className="info__products">
              <Body2>{card?.title__1}</Body2>
              <Body2 className="p___2">{card?.title__2}</Body2>
              <Body2 className="p__price">{card?.rangPrice}</Body2>
            </div>
          </div>
        ))}
      </div>
    </StyleMainCardRelated>
  );
};

export default CardRelated;
