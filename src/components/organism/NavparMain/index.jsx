"use client";

import IconsNavServ from "@/components/atoms/IconsNavServ";
import LogoBrand from "@/components/atoms/LogoBrand";
import MainSearchField from "@/components/molecules/MainSearchField";
import { StyleMainNavpar, StyledKawaki } from "./style";
import NavParPartTwo from "@/components/molecules/NavParPartTwo";
import Link from "next/link";

const NavparMain = () => {
  return (
    <StyleMainNavpar>
      <StyledKawaki>
        <Link href="/home">
          <LogoBrand />
        </Link>

        <MainSearchField />
        <IconsNavServ />
      </StyledKawaki>

      <NavParPartTwo />
    </StyleMainNavpar>
  );
};

export default NavparMain;
