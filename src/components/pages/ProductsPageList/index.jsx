"use client";

// import CardCustomForListPage from "@/components/molecules/CardCustomForListPage";
import PathsPage from "@/components/atoms/PathsPage";
import CardCustomForListPage from "@/components/molecules/CardCustomForListPage";
import NavigationControlBar from "@/components/organism/NavigationControlBar";
import SideBarForLiquidation from "@/components/organism/SideBarForLiquidation";
import { PartleftSidepar, PartrightContent, StyleWraperMain } from "./style";
import { useState } from "react";
import { SHOW } from "@/constants";
import ButtonsNavigationForList from "@/components/molecules/ButtonsNavigationForList";
import { StyledContainer } from "@/components/atoms/Container/style";
import NavparMain from "@/components/organism/NavparMain";
import SubscribeNewsletter from "@/components/molecules/SubscribeNewsletter";
import FooterInfo from "@/components/organism/FooterInfo";
import Footer from "@/components/organism/Footer/Footer";

export const ProductsPageList = () => {
  const [typeShow, setTypeShow] = useState(SHOW.HORIZONTAL);

  const toogleShow = () => {
    setTypeShow((prevState) =>
      prevState === SHOW.VERTICAL ? SHOW.HORIZONTAL : SHOW.VERTICAL
    );
  };

  return (
    <>
      <NavparMain />

      <StyledContainer>
        <StyleWraperMain>
          <PartleftSidepar>
            <SideBarForLiquidation />
          </PartleftSidepar>

          <PartrightContent>
            <NavigationControlBar
              handelTypeShow={toogleShow}
              stateTypeShowNow={typeShow}
            />
            <CardCustomForListPage variantHaz={typeShow} />

            <ButtonsNavigationForList />
          </PartrightContent>

          {/* <PathsPage/> */}
        </StyleWraperMain>
      </StyledContainer>

      <SubscribeNewsletter />
      <FooterInfo />
      <Footer />
    </>
  );
};
// horizontal
// vertical
