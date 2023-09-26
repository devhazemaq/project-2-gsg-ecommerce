"use client";

import React from "react";
import {
  StyleMainNavCont,
  StyledControl,
  StyledDetailsAboutQuantity,
} from "./style";
import Image from "next/image";

const NavigationControlBar = ({handelTypeShow, stateTypeShowNow}) => {
  
  
  return (
    <StyleMainNavCont>
      <StyledDetailsAboutQuantity>
        <span>12.911</span>
        <span>items in</span>
        <span>Mobile accessory</span>
      </StyledDetailsAboutQuantity>

      <StyledControl $valueshow={stateTypeShowNow} >
        <div className="forChek">
          <input type="checkbox" name="checkVerfid" id="checkHaz" />
          <label htmlFor="checkHaz">Verified only</label>
        </div>

        <select name="selectForFeatured" id="">
          <option value="f1">Featured1</option>
          <option value="f2">Featured2</option>
          <option value="f3">Featured3</option>
        </select>

        <div className="iconContral">
          <div className="icon__contol__contail icon__1" onClick={handelTypeShow} >
            <Image
              src={"/iconGrid_View.svg"}
              alt="iconGrid_View"
              width={24}
              height={24}
              className="iconGrid__View"
            />
          </div>
          <div className="icon__contol__contail icon__2" onClick={handelTypeShow} >
            <Image
              src={"/iconTableRows.svg"}
              alt="iconTableRows"
              width={24}
              height={24}
              className="iconRow__View"

              
            />
          </div>
        </div>
      </StyledControl>
    </StyleMainNavCont>
  );
};

export default NavigationControlBar;
