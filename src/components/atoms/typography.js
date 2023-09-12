import { theme } from "@/styles/theme";
import { styled } from "styled-components";

const BigHeading = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 2rem;
  font-style: normal;
  font-weight: '600';
  letter-spacing: -0.2px;
  color: ${theme.colors.primaryDark};

`;

const MainHeading = styled.h1`
  font-family: ${theme.fonts.primary};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: '400';
  color: ${theme.colors.primaryDark};
`;

const Heading = styled.h2`
  font-family: ${theme.fonts.primary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: '600';
  color: ${theme.colors.primaryDark};
`;

const Body = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight:  '500';
  color: ${theme.colors.primaryDark};
  line-height: normal;
`;

const Body2 = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight:  '400';
  color: ${theme.colors.primaryDark};
  line-height: normal;
`;

const SmallText = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight:  '400';
  color: ${theme.fonts.primary};
  line-height: normal;
`;

const TitleH4 = styled.h4`
  font-family: ${theme.fonts.primary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: '600';
  color: ${theme.fonts.primary};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;

export {
  BigHeading,
  MainHeading,
  Heading,
  Body,
  Body2,
  SmallText,
  TitleH4,
};