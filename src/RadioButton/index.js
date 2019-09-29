import React from "react";
import {Label, Span, Input} from './index.style';

const RadioButton = ({checked, value, name, onChange, label}) => {

  return (
    <div>
      <Label>
        <Input
          type="radio"
          checked={checked}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Span>{label}</Span>
      </Label>
    </div>
  );
  
}

export default RadioButton;