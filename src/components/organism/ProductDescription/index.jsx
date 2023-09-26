"use client";

import { Body, Body2 } from "@/components/atoms/typography";
import { LeftPart, RightPart, StyleMainProductDescription } from "./style";
import Image from "next/image";
import { useEffect } from "react";
import { API_URL_YOUMAYLIKE } from "@/config/api";
import { getYoumaylikeAction } from "@/redux/slices/youmaylike";
import { useDispatch, useSelector } from "react-redux";

const ProductDescription = () => {
  const dispatch = useDispatch();
  const { youmaylike } = useSelector((state) => state.youmaylike);

  console.log(youmaylike);

  useEffect(() => {
    dispatch(getYoumaylikeAction(API_URL_YOUMAYLIKE));
  }, []);

  return (
    <StyleMainProductDescription>
      {/* -s------ Right Part ------ */}
      <RightPart>
        <div className="valbel__data">
          <Body className="prah__1">Description</Body>
          <Body>Reviews</Body>
          <Body>Shipping</Body>
          <Body>About company</Body>
        </div>

        <div className="p__desctuption">
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat <br />{" "}
            nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, <br />
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in
            <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </Body>

          <div className="all__product__specifications">
            <div className="specif__1">
              <Body2>Model</Body2>
              <Body2>#8786867</Body2>
            </div>
            <div className="specif__1">
              <Body2>Style</Body2>
              <Body2>Classic style</Body2>
            </div>
            <div className="specif__1">
              <Body2>Certificate</Body2>
              <Body2>ISO-898921212</Body2>
            </div>
            <div className="specif__1">
              <Body2>Size</Body2>
              <Body2>34mm x 450mm x 19mm</Body2>
            </div>
            <div className="specif__1">
              <Body2>Memory</Body2>
              <Body2>36GB RAM</Body2>
            </div>
          </div>

          <div className="identical__specifications">
            <div className="datelis__1">
              <Image
                src={"/assets/images/page3/trueGray.svg"}
                alt="trueGray"
                width={20}
                height={20}
              />
              <Body2>Some great feature name here </Body2>
            </div>
            <div className="datelis__1">
              <Image
                src={"/assets/images/page3/trueGray.svg"}
                alt="trueGray"
                width={20}
                height={20}
              />
              <Body2>Lorem ipsum dolor sit amet, consectetur </Body2>
            </div>
            <div className="datelis__1">
              <Image
                src={"/assets/images/page3/trueGray.svg"}
                alt="trueGray"
                width={20}
                height={20}
              />
              <Body2>Duis aute irure dolor in reprehenderit</Body2>
            </div>
            <div className="datelis__1">
              <Image
                src={"/assets/images/page3/trueGray.svg"}
                alt="trueGray"
                width={20}
                height={20}
              />
              <Body2>Some great feature name here</Body2>
            </div>
          </div>
        </div>
      </RightPart>
      {/* -e------ Right Part ------ */}

      {/* -s------ Left Part ------ */}
      <LeftPart>
        <Body className="p__title">You may like</Body>
        <div className="for__all_cards">
          {youmaylike?.map((card) => (
            <div key={card?.id} className="contain__card">
              <div className="img__contain">
                <Image src={card?.image} alt="image" width={54} height={59} />
              </div>
              <div className="info__products">
                <Body2>{card?.title__1}</Body2>
                <Body2 className="p___2">{card?.title__2}</Body2>
                <Body2 className="p__price">{card?.rangPrice}</Body2>
              </div>
            </div>
          ))}
        </div>
      </LeftPart>
      {/* -e------ Left Part ------ */}
    </StyleMainProductDescription>
  );
};

export default ProductDescription;
