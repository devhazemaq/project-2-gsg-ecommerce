import { Body, Body2 } from "@/components/atoms/typography";
import { StyleMainCardsRec, StyledCardRecomm } from "./style";
import { useEffect, useState } from "react";
import { API_URL_RECOMMENDED } from "@/config/api";
import { useDispatch, useSelector } from "react-redux";
import { getrecommendedAction } from "@/redux/slices/recommended";

const CardsRecomm = () => {
  const dispatch = useDispatch();

  const { recommended } = useSelector((state) => state.products);
  // console.log(recommended)

  useEffect(() => {
    dispatch(getrecommendedAction(API_URL_RECOMMENDED));
  }, []);

  return (
    <StyleMainCardsRec>
      {recommended?.map((card) => (
        <StyledCardRecomm key={card?.id}>
          <div className="for__img">
            <img src={card?.url} alt="Bitmap" />
          </div>
          <div className="contain__prah">
            <Body>{card?.price}</Body>
            <Body2 className="b__info">{card?.title1}</Body2>
            <Body2 className="b__info">{card?.title2}</Body2>
          </div>
        </StyledCardRecomm>
      ))}
    </StyleMainCardsRec>
  );
};

export default CardsRecomm;
