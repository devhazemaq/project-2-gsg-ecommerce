"use client";

import { Body } from "@/components/atoms/typography";
import { StyledNav2 } from "./style";
import FlagsStatic from "@/components/atoms/FlagsStatic";
import SelectForNavTwo from "@/components/atoms/SelectForNavTwo";
import Link from "next/link";

const NavParPartTwo = () => {
  return (
    <StyledNav2>
      <div className="format__nav">
        <ul>
          <li>
            <Link href="/store-list">
              <span className="fotAllCate">
                <img src="/iconNav2MinueBurger.svg" alt="iconNav2MinueBurger" />
                <Body>All category</Body>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/store-list">
              <Body>Hot offers</Body>
            </Link>
          </li>
          <li>
            <Link href="/store-list">
              <Body>Gift boxes</Body>
            </Link>
          </li>
          <li>
            <Link href="/store-list">
              <Body>Menu item</Body>
            </Link>
          </li>
          <li>
            <select name="hellp">
              <option value="hellp1">Hellp</option>
              <option value="hellp2">Sooon</option>
              <option value="hellp2">Sooon</option>
            </select>
          </li>
        </ul>
      </div>

      <SelectForNavTwo />
    </StyledNav2>
  );
};

export default NavParPartTwo;
