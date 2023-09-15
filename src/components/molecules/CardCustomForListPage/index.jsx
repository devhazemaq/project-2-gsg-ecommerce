"use client";

import Image from "next/image";
import {
  StyleMainForListHoriz,
  StyleMainForListVert,
  StyleWaper,
} from "./style";
import { Body, TitleH4 } from "@/components/atoms/typography";
import { useEffect } from "react";
import { API_URL_PRODUCTSCARDINALLDATA } from "@/config/api";
import { useDispatch, useSelector } from "react-redux";
import { getListlistproductsAction } from "@/redux/slices/listproducts";
import { useRouter } from "next/navigation";

const CardCustomForListPage = ({ variantHaz }) => {

  const router = useRouter();

  const dispatch = useDispatch();
  const { listproducts } = useSelector((state) => state.listproducts);

  // console.log(listproducts);

  useEffect(() => {
    if (!listproducts?.length) {
      dispatch(getListlistproductsAction(API_URL_PRODUCTSCARDINALLDATA));
    }
  }, []);

  return (
    <StyleWaper>
      {variantHaz === "horizontal" && (
        <StyleMainForListHoriz $variantdirc={variantHaz}>
          {/* =========== */}
          <div className="cont__haz">
            {listproducts?.map((card) => (
              <div key={card?.id}>
                <div className="style__contain__card"  >
                  <div className="img__contain">
                    <img src={card?.image} alt="tablet" />
                  </div>
                  <div className="contain__details__product">
                    <Body>{card?.titleH}</Body>
                    <div className="for__price">
                      <TitleH4>${card?.price.afterDiscount}</TitleH4>
                      <del>${card?.price.beforeDiscount}</del>
                    </div>
                    <div className="valuable__information">
                      <div className="for__stars__rate">
                        <img src="/ratingStars.svg" alt="ratingStars" />
                        <Body className="number__rate">7.5</Body>
                      </div>
                      <div className="for__orders">
                        <span className="small__circle"></span>
                        <Body>{card?.orders} orders</Body>
                      </div>
                      <div className="free_chipping">
                        <span className="small__circle"></span>
                        <Body>{card?.shipping}</Body>
                      </div>
                    </div>

                    <div className="pouduct__desc">
                      <Body>{card?.description__1}</Body>
                      <Body>{card?.description__2}</Body>
                    </div>

                    <div className="for__view__details" onClick={()=> router.push(`store-list/${card?.id}`)} >
                      <Body>View details</Body>
                    </div>
                  </div>

                  <div className="contain__img__fovorite">
                    <Image
                      src="/favorite_broudects.svg"
                      alt="favorite_broudects"
                      width={24}
                      height={24}
                      className="favorite_img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========== */}
        </StyleMainForListHoriz>
      )}

      {variantHaz === "vertical" && (
        <StyleMainForListVert $variantdirc={variantHaz}>
          {/* ======================= */}

          {listproducts?.map((card) => (
            <div key={card?.id} className="v__style__contain__card" onClick={()=> router.push(`store-list/${card?.id}`)} >
              <div className="v__img__contain">
                <img src={card?.image} alt="img porduct" />
              </div>
              <div className="v__contain__details__product">
                <div className="v__kawaki">
                  <div className="v__for__price">
                    <TitleH4>${card?.price.afterDiscount}</TitleH4>
                    <del>${card?.price.beforeDiscount}</del>
                  </div>
                  <div className="v__valuable__information">
                    <div className="v__for__stars__rate">
                      <img src="/ratingStars.svg" alt="ratingStars" />
                      <Body className="v__number__rate">7.5</Body>
                    </div>
                  </div>

                  <div className="v__pouduct__desc">
                    <Body>{card?.titleV1}</Body>
                    <Body>{card?.titleV2}</Body>
                  </div>
                </div>
                <div className="v__contain__img__fovorite">
                  <Image
                    src="/favorite_broudects.svg"
                    alt="favorite_broudects"
                    width={24}
                    height={24}
                    className="v__favorite_img"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* ====================== */}
        </StyleMainForListVert>
      )}
    </StyleWaper>
  );
};

export default CardCustomForListPage;

// variant =>
//   horizontal
//   vertical
