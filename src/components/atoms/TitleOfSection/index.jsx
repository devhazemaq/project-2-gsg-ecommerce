import React from 'react'
import { MainHeading } from '../typography';
import { StyledTitle } from './style';

const TitleOfSection = ({textTitle}) => {
  return (
    <StyledTitle>
      <MainHeading>{textTitle}</MainHeading>
    </StyledTitle>
  )
};

export default TitleOfSection;