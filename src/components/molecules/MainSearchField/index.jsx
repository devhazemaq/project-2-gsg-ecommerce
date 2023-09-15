"use client"

import CusttomButton from '@/components/atoms/CustomButton'
import { StyledSearchForm } from './style'
import Link from 'next/link'

const MainSearchField = () => {
  return (
    <StyledSearchForm>
      <input type="text" placeholder='Search' />

      <select name="categorys">
        <option value="allCategory">All category</option>
        <option value="mobileAccessory">Mobile accessory</option>
        <option value="electronics">Electronics</option>
        <option value="smartPhones">Smartphones</option>
        <option value="modernTech">Modern tech</option>
      </select>

      <CusttomButton btnColor={"blueSizeSmall"} btnText={"Search"} />

    </StyledSearchForm>
  )
}

export default MainSearchField