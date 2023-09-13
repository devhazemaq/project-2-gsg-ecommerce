import { StyledButton } from "@/styles/common";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const StyledWraperBtn = styled(StyledButton)`
  ${(props) =>
    props.$btncolor === "blueSizeSmall" &&
    `
    width: 100px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `};

  ${(props) =>
    props.$btncolor === "blueSizeBig" &&
    `
    width: 110px;
    border-radius: 6px;
    
  `};

  ${(props) =>
    props.$btncolor === "blue180" &&
    `
    width: 180px;
    border-radius: 6px;
    
  `};

  ${(props) =>
    props.$btncolor === "whiteSizeBig" &&
    `
    width: 112px;
    border-radius: 6px;
    color : ${theme.colors.primaryDark};
    background : ${theme.colors.backgroundWhite};
    
  `};
  ${(props) =>
    props.$btncolor === "white180" &&
    `
    width: 180px;
    border-radius: 6px;
    color : ${theme.colors.primaryDark};
    background : ${theme.colors.backgroundWhite};
    
  `};

  ${(props) =>
    props.$btncolor === "blueSizeVeryBig" &&
    `
    width: 228px;
    border-radius: 6px;
    
  `};

  ${(props) =>
    props.$btncolor === "whiteSizeVeryBig" &&
    `
    width: 228px;
    border-radius: 6px;
    background: ${theme.colors.backgroundWhite};
    color: ${theme.colors.colorDarkBlue}
    
  `};

  ${(props) =>
    props.$btncolor === "orange" &&
    `
    width: 121px;
    border-radius: 6px;
    background: ${theme.colors.colorOrange};
  `};

  ${(props) =>
    props.$btncolor === "green" &&
    `
    width: 228px;
    border-radius: 8px;
    background: ${theme.colors.colorGreen};
  `};

  ${(props) =>
    props.$btncolor === "red" &&
    `
    width: 71px;
    border-radius: 8px;
    color: ${theme.colors.colorCrimson};
    background: ${theme.colors.backgroundWhite};
    border: 1px solid ${theme.colors.colorGrayForBorder};
    border-raduis: 6px;
  `};
  ${(props) =>
    props.$btncolor === "wihte108" &&
    `
    width: 108px;
    border-radius: 8px;
    color: ${theme.colors.colorBlueNoor};
    background: ${theme.colors.backgroundWhite};
    border: 1px solid ${theme.colors.colorGrayForBorder};
    border-raduis: 6px;
  `};

  ${(props) =>
    props.$btncolor === "wihte85" &&
    `
    width: 85px;
    color: ${theme.colors.colorBlueNoor};
    background: ${theme.colors.backgroundWhite};
    border: 1px solid ${theme.colors.colorGrayForBorder};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `};

${(props) =>
    props.$btncolor === "cart" &&
    `
    width: 115px;
    border-radius: 6px;
    background: #191D88;
    color: ${theme.colors.backgroundWhite} ;
    
  `};

`;

// blueSizeSmall
// blueSizeBig
// whiteSizeBig
// blueSizeVeryBig
// whiteSizeVeryBig
// orange
// green
// red
// wihte108
// wihte85
// cart