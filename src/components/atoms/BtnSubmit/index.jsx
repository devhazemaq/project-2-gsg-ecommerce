// "use client"

import { StyledBtn } from "./style"

const BtnSubmit = ({btnSubmitText, colorSubmitText, btnWidth}) => {
  return (
    <StyledBtn $backgrondcolor={colorSubmitText} $btnwidth={btnWidth} type='submit'>{btnSubmitText}</StyledBtn>
  )
}

export default BtnSubmit