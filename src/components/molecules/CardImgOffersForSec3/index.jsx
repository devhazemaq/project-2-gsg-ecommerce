"use client";
import { StyleMainCard, StyledCardImgOff } from "./style";
import DscountPercentage from "@/components/atoms/DscountPercentage";
import { Body } from "@/components/atoms/typography";
import { API_URL, API_URL_OFFERS } from "@/config/api";
import axios from "axios";
import { useEffect, useState } from "react";
import DealsAndOffers from "../DealsAndOffers";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductsAction } from "@/redux/slices/productsHaz";

const CardImgOffersForSec3 = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductsAction(API_URL_OFFERS));
  }, []);

  return (
    <StyleMainCard>
      {products?.map((card) => (
        <StyledCardImgOff key={card?.id}>
          <img src={card?.url} alt="offersImg1" />
          <Body>{card?.title}</Body>
          <DscountPercentage
            descountPerc={card?.descount}
            className="card__desc"
          />
        </StyledCardImgOff>
      ))}
    </StyleMainCard>
  );
};

export default CardImgOffersForSec3;
