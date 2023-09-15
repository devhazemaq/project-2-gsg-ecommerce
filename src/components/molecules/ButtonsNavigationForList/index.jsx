import React from "react";
import { StyleMainNav } from "./style";
import { Body } from "@/components/atoms/typography";
import Image from "next/image";
import CusttomButton from "@/components/atoms/CustomButton";
import { useRouter } from "next/navigation";

const ButtonsNavigationForList = () => {
  const router = useRouter();

  const handleMoveForHome = () => {
    router.push(`/home`);
  };
  const handleMoveForCart = () => {
    router.push(`/cart`);
  };

  return (
    <StyleMainNav>
      <CusttomButton
        btnColor={"cart"}
        btnText="Home"
        heandleClick={handleMoveForHome}
      />
      <CusttomButton
        btnColor={"cart"}
        btnText="cart"
        heandleClick={handleMoveForCart}
      />

      <select>
        <option value="v1">Show 10</option>
        <option value="v1">Show 15</option>
        <option value="v1">Show 20</option>
      </select>

      <div className="contain__btns__nav">
        <span>
          <Image src={"/arowleft.svg"} alt="arowleft" width={24} height={24} />
        </span>
        <span>
          <Body>1</Body>
        </span>
        <span>
          <Body>2</Body>
        </span>
        <span>
          <Body>3</Body>
        </span>
        <span>
          <Image
            src={"/arowRightBlack.svg"}
            alt="arowRightBlack"
            width={24}
            height={24}
          />
        </span>
      </div>
    </StyleMainNav>
  );
};

export default ButtonsNavigationForList;
