"use client";

import Image from "next/image";
import { LeftPart, ReightPart, StyleMainCartContainProducts } from "./style";
import CusttomButton from "@/components/atoms/CustomButton";
import { Body, Body2 } from "@/components/atoms/typography";
import { useEffect } from "react";
import { API_URL_MYCARDS } from "@/config/api";
import CartCoupon from "@/components/molecules/CartCoupon";
import CartBuy from "@/components/molecules/CartBuy";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductInMycartAction,
  getMycartAction,
} from "@/redux/slices/mycart";
import Swal from "sweetalert2";

const CartContainProducts = () => {


  const dispatch = useDispatch();

  const { mycart } = useSelector((state) => state.mycart);
  const handleDeletaProudect = (id) => {
    heandleSweet(id)
    
  };

  useEffect(() => {
    dispatch(getMycartAction(API_URL_MYCARDS));
  }, []);

  const heandleSweet = (id) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        dispatch(deleteProductInMycartAction(API_URL_MYCARDS, id));
      }
    })
  }

  return (
    <StyleMainCartContainProducts>
      <LeftPart>
        <div className="AllContentsOfCard">
          {mycart?.map((card) => (
            <div key={card?.id} className="product__of__card">
              <div className="kawaki__for__img__contain__and__details__product__of__card">
                <div className="img__contain">
                  <Image
                    src={card?.image}
                    alt="imgCard"
                    width={55}
                    height={56}
                  />
                </div>
                <div className="details__product__of__card">
                  <Body className="p___1">{card?.title__1}</Body>
                  <Body2 className="p__info">
                    {"Size: medium, Color: blue, Material: Plastic"}
                  </Body2>
                  <Body2 className="p__info">Seller: Best factory LLC</Body2>
                  <div className="contain__btns">
                    <CusttomButton
                      btnColor={"red"}
                      btnText="remove"

                      heandleClick={(e) => {
                        e.stopPropagation();
                        
                        handleDeletaProudect(card?.id);
                      }}
                    />

                    {/* <button onClick={heandleSweet}>7az</button> */}

                    <CusttomButton
                      btnColor={"wihte108"}
                      btnText="Save for later"
                    />
                  </div>
                </div>
              </div>

              <div className="contain__for__select__price">
                <Body>${card?.price}</Body>
                <select>
                  <option value="v1">Qty: 9</option>
                  <option value="v1">Qty: 10</option>
                  <option value="v1">Qty: 11</option>
                  <option value="v1">Qty: 12</option>
                </select>
              </div>
            </div>
          ))}
        </div>
        <Link href="/store-list">
          <div className="btn__back__contain">
            <Image
              src={"/assets/images/page4/arrowBackLeftWhite.svg"}
              alt="arrowBackLeftWhite"
              width={22}
              height={22}
            />
            <Body>Back to shop</Body>
          </div>
        </Link>
      </LeftPart>

      <ReightPart>
        <CartCoupon />
        <CartBuy />
      </ReightPart>
    </StyleMainCartContainProducts>
  );
};

export default CartContainProducts;

// const handleDeletaProudect = (id) => {deleteProductAction(id)}
// <button onClick={(e)=>{
//   e.stopPropagation();
//   handleDeletaProudect(product.id);
// }} >delete7az</button>
