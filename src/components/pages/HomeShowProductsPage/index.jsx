"use client";

import Hero from "@/components/organism/Hero";
import HomeAndOutdoor from "@/components/organism/HomeAndOutdoor";
import Sech4PartHomeOutdor from "@/components/organism/Sech4PartHomeOutdor";
import ConsumerElectronics from "@/components/organism/ConsumerElectronics";
import RecommendedItems from "@/components/organism/RecommendedItems";
import OuExtraServices from "@/components/organism/OuExtraServices";
import SuppliersByRegion from "@/components/molecules/SuppliersByRegion";
import NavparMain from "@/components/organism/NavparMain";
import { StyledContainer } from "@/components/atoms/Container/style";
import SubscribeNewsletter from "@/components/molecules/SubscribeNewsletter";
import FooterInfo from "@/components/organism/FooterInfo";
import Footer from "@/components/organism/Footer/Footer";

const HomeShowProductsPage = () => {
  return (
    <div>
      <NavparMain />

      <StyledContainer>
        <Hero />

        <HomeAndOutdoor />

        <Sech4PartHomeOutdor />

        <ConsumerElectronics />

        <RecommendedItems />

        <OuExtraServices />

        <SuppliersByRegion />
      </StyledContainer>

      <SubscribeNewsletter />
      
      <FooterInfo />
      
      <Footer />
    </div>
  );
};

export default HomeShowProductsPage;
