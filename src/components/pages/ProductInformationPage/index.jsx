"use client";

import { StyledContainer } from "@/components/atoms/Container/style";
import CardRelated from "@/components/molecules/CardRelated";
import SuperDiscount from "@/components/molecules/SuperDiscount";
import Footer from "@/components/organism/Footer/Footer";
import FooterInfo from "@/components/organism/FooterInfo";
import NavparMain from "@/components/organism/NavparMain";
import ProductDescription from "@/components/organism/ProductDescription";
import ProductDetails from "@/components/organism/ProductDetails";
import {
  API_URL_PRODUCTSCARDINALLDATA,
  API_URL_PROUDLISTS,
} from "@/config/api";

import { getSinglelistproductsAction } from "@/redux/slices/listproducts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductInformationPage = ({ params }) => {
  const dispatch = useDispatch();

  const { listproduct, isLoading } = useSelector((state) => state.listproducts);

  // const myProduct = savedForLater?.find((item)=> item.id === +params.id)
  console.log(listproduct);

  console.log(params);

  useEffect(() => {
    if (+listproduct.id !== +params.id) {
      dispatch(
        getSinglelistproductsAction(API_URL_PRODUCTSCARDINALLDATA, +params.id)
      );
    }
  }, [dispatch, params.id]);

  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <NavparMain />
          <StyledContainer>
            <ProductDetails cnontinProductData={listproduct} loading={isLoading} />
            <ProductDescription />
            <CardRelated />
            <SuperDiscount />
          </StyledContainer>
          <FooterInfo />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductInformationPage;
