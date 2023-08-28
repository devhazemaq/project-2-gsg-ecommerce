const BigHeading = styled.h1`
  font-family: ${props.theme.fonts.primary};
  font-size: 2rem;
  font-style: normal;
  font-weight: '700';
  color: ${props => props.theme.color.primaryDark};

`;

const MainHeading = styled.h1`
  font-family: ${props.theme.fonts.primary};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: '400';
  color: ${props => props.theme.color.primaryDark};
`;

const Heading = styled.h2`
  font-family: ${props.theme.fonts.primary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: '600';
  color: ${props => props.theme.color.primaryDark};
`;

const Body = styled.p`
  font-family: ${props.theme.fonts.primary};
  font-size: 1rem;
  font-style: normal;
  font-weight:  '500';
  color: ${props => props.theme.color.primaryDark};
  line-height: normal;
`;

const SmallText = styled.span`
  font-family: ${props.theme.fonts.primary};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight:  '400';
  color: ${props.theme.fonts.primary};
  line-height: normal;
`;

const TitleH4 = styled.h4`
  font-family: ${props.theme.fonts.primary};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: '600';
  color: ${props.theme.fonts.primary};
  line-height: 1.75rem;
  letter-spacing: -0.0125rem;
`;

export {
  BigHeading,
  MainHeading,
  Heading,
  Body,
  SmallText,
  TitleH4,
};