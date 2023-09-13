"use client";

import { StyledWraperBtn } from "./style";


const CusttomButton = ({ btnColor, btnText = "7az dev", heandleClick }) => {
  return (
    <StyledWraperBtn $btncolor={btnColor} type="submit" onClick={heandleClick}>
      {btnText}
    </StyledWraperBtn>
  );
};

export default CusttomButton;

// blueSizeSmall
// blueSizeBig
// whiteSizeBig
// blueSizeVeryBig
// whiteSizeVeryBig
// orange
// green

// blue180
// white180

// cart
