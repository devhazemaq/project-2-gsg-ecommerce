"use client";

import {
  ProdAllImages,
  ProdAllInfo,
  ProdSupplierInfo,
  StyleMainProduct,
} from "./style";
import Image from "next/image";
import {
  Body,
  Body2,
  Heading,
  SmallText,
  TitleH4,
} from "@/components/atoms/typography";
import CusttomButton from "@/components/atoms/CustomButton";

const ProductDetails = ({cnontinProductData, }) => {

  // console.log(cnontinProductData)

  return (
    // -s------ Style Main Product ------
    <StyleMainProduct>
      
      {/* -s------ Prod All Images ------ */}
      
      <ProdAllImages>
        <div className="img__main__big">
          <Image
            
            src={`/${cnontinProductData?.image}`}
            alt="Big img product"
            width={330}
            height={330}
            priority={true}
          />
        </div>

        <div className="contain__small__imgs">
          <div className="imgs__main__small img__border">
            <Image
              src={"/assets/images/page3/2.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
          <div className="imgs__main__small">
            <Image
              src={"/assets/images/page3/3.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
          <div className="imgs__main__small">
            <Image
              src={"/assets/images/page3/4.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
          <div className="imgs__main__small">
            <Image
              src={"/assets/images/page3/5.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
          <div className="imgs__main__small">
            <Image
              src={"/assets/images/page3/6.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
          <div className="imgs__main__small">
            <Image
              src={"/assets/images/page3/7.png"}
              alt="img__smaill"
              width={43}
              height={43}
            />
          </div>
        </div>
      </ProdAllImages>
      {/* -e------ Prod All Images ------ */}

      {/* -s------ Prod All Info ------ */}
      <ProdAllInfo>
        <div className="do__stock">
          <div className="state__stock">
            <Image
              src={"/assets/images/page3/true.svg"}
              alt="true"
              width={24}
              height={24}
            />
            <Body2 className="stock__tit">in stock</Body2>
          </div>

          <Heading>Mens Long Sleeve T-shirt Cotton Base</Heading>
          <Heading>Layer Slim Muscle</Heading>

          {/* -e--- tqyeam info ---  */}

          <div className="tqyeam__info">
            <Image
              src={"/assets/images/stars/stars4.svg"}
              alt="Stars"
              width={80}
              height={15}
            />
            <SmallText>9.3 </SmallText>
            <span className="small__circle"></span>
            <Image
              src={"/assets/images/page3/message.svg"}
              alt="message"
              width={20}
              height={20}
            />
            <Body2 className="stock__p">32 reviews</Body2>
            <span className="small__circle"></span>
            <Image
              src={"/assets/images/page3/shoppingBasket.svg"}
              alt="shoppingBasket"
              width={20}
              height={20}
            />
            <Body2 className="stock__p">154 sold</Body2>
          </div>
          {/* -e--- tqyeam info ---  */}

          {/* -s---  price list --- */}
          <div className="price__list">
            <div className="first__price__list">
              <TitleH4>$98.00</TitleH4>
              <SmallText>50-100 pcs</SmallText>
            </div>
            <div className="second__price__list">
              <TitleH4>$90.00</TitleH4>
              <SmallText>100-700 pcs</SmallText>
            </div>
            <div className="third__price__list">
              <TitleH4>$78.00</TitleH4>
              <SmallText>700+ pcs</SmallText>
            </div>
          </div>
          {/* -e---  price list --- */}

          <div className="group__details__list">
            <div className="details__list">
              <Body2 className="data__1">Price:</Body2>
              <Body2 className="data__2">Negotiable</Body2>
            </div>
            <div className="details__list__2">
              <div className="fild__row">
                <Body2 className="data__1">Type:</Body2>
                <Body2 className="data__2">Classic shoes</Body2>
              </div>
              <div className="fild__row">
                <Body2 className="data__1">Price:</Body2>
                <Body2 className="data__2">Negotiable</Body2>
              </div>

              <div className="fild__row">
                <Body2 className="data__1">Material:</Body2>
                <Body2 className="data__2">Plastic material</Body2>
              </div>
              <div className="fild__row">
                <Body2 className="data__1">Design:</Body2>
                <Body2 className="data__2">Modern nice</Body2>
              </div>
            </div>
            <div className="details__list__3">
              <div className="fild__row">
                <Body2 className="data__1">Customization: </Body2>
                <Body2 className="data__2">
                  Customized logo and
                  <br /> design custom packages
                </Body2>
              </div>
              <div className="fild__row">
                <Body2 className="data__1">Protection: </Body2>
                <Body2 className="data__2">Refund Policy</Body2>
              </div>
              <div className="fild__row">
                <Body2 className="data__1">Warranty: </Body2>
                <Body2 className="data__2">2 years full warranty </Body2>
              </div>
            </div>
          </div>
        </div>
      </ProdAllInfo>
      {/* -e------ Prod All Info ------ */}

      <ProdSupplierInfo>
        <div className="supp_details">
          <div className="supp__name__avtar">
            <div className="contain__avtar">
              <Image
                src={"/assets/images/page3/R.png"}
                alt="avtarImage"
                width={18}
                height={17}
              />
            </div>
            <div className="name__info">
              <Body2>Supplier</Body2>
              <Body2>Guanjoi Trading LLC</Body2>
            </div>
          </div>
          <div className="supp__country__info">
            <div className="data__0 data__1">
              <Image
                src={"/assets/images/page3/DE@2x.png"}
                alt="DE@2x"
                width={20}
                height={15}
              />
              <Body2>Germany, Berlin</Body2>
            </div>
            <div className="data__0 data__2">
              <Image
                src={"/assets/images/page3/verifiedUser.svg"}
                alt="verifiedUser"
                width={20}
                height={20}
              />
              <Body2>Verified Seller</Body2>
            </div>
            <div className="data__0 data__3">
              <Image
                src={"/assets/images/page3/language.svg"}
                alt="language"
                width={20}
                height={20}
              />
              <Body2>Worldwide shipping</Body2>
            </div>
          </div>
          <div className="contain__btns">
            <CusttomButton
              btnColor={"blueSizeVeryBig"}
              btnText="Send inquiry"
              
            />
            <CusttomButton
              btnColor={"whiteSizeVeryBig"}
              btnText="Seller's profile"
              className=" style__btn__whiet"
            />
          </div>
        </div>
        <div className="contain__save__later">
          <Image
            src={"/favorite_broudects.svg"}
            alt="favorite_broudects"
            width={24}
            height={24}
          />
          <Body>Save for later</Body>
        </div>
      </ProdSupplierInfo>
    </StyleMainProduct>
    // -e------ Style Main Product ------
  );
};

export default ProductDetails;
