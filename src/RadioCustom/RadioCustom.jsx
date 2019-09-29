import React from 'react';
import {
  Icon,
  RadioContainer,
  RadioLabel,
  HiddenRadio,
  StyledRadio
} from './RadioCustom.style';

const RadioCustom = ({label, checked, ...props}) => {
  return (
    <RadioLabel>
      <RadioContainer>
        <HiddenRadio checked={checked} {...props} />
        <StyledRadio checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledRadio>
      </RadioContainer>
      <span>{label}</span>
    </RadioLabel>
  );
};

export default RadioCustom;
