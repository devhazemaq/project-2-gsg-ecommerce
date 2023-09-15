import { Body2, SmallText } from "@/components/atoms/typography";
import React, { useEffect, useState } from "react";
import { StyledCirdInfo, StyledMainCardImgForSec4_5 } from "./style";
import axios from "axios";
import { API_URL, API_URL_OUTDOOR } from "@/config/api";
import { useDispatch, useSelector } from "react-redux";
import { getOutdoorsAction } from "@/redux/slices/outdoors";

const CardImgForSec4_5 = () => {
  const dispatch = useDispatch();

  const { outdoors } = useSelector((state) => state.outdoors);
  // console.log(outdoors);

  useEffect(() => {
    dispatch(getOutdoorsAction(API_URL_OUTDOOR));
  }, []);

  return (
    <StyledMainCardImgForSec4_5>
      {outdoors?.map((card) => (
        <div key={card.id} className="StyledContain">
          <StyledCirdInfo>
            <Body2>{card.title}</Body2>
            <SmallText>From</SmallText>
            <SmallText>{card.price}</SmallText>
          </StyledCirdInfo>

          <div className="contain__img">
            <img src={card.url} alt="ImgForSec4_5" />
          </div>
        </div>
      ))}
    </StyledMainCardImgForSec4_5>
  );
};

export default CardImgForSec4_5;
