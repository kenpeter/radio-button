import styled from 'styled-components';

export const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
`;

export const RadioLabel = styled.label`
  margin: 0;
  padding: 0;

  max-width: 550px;
  display: block;
  font-size: 14px;
  color: #000;
  line-height: 1.5rem;

  border: solid 1px #808080;
  border-radius: 4px;
  padding: 12px 12px 12px 48px;
  //min-height: 30px;

  vertical-align: middle;
  position: relative;

  &:hover {
    border: solid 1px #000;
  }
`;

export const RadioContainer = styled.div`
  // container inline
  display: inline-block;
  // vertical mid
  vertical-align: middle;
`;

// the tick box
export const HiddenRadio = styled.input.attrs({type: 'radio'})`
  // no border
  border: 0;
  // shape
  clip: rect(0 0 0 0);
  // shape
  clippath: inset(50%);
  // very small
  height: 1px;
  // less margin
  margin: -1px;
  // no flow
  overflow: hidden;
  // no padding
  padding: 0;
  // position
  position: absolute;
  white-space: nowrap;
  // very small
  width: 1px;
`;

export const StyledRadio = styled.div`
  // inline
  display: inline-block;
  // transition
  transition: all 150ms;

  // position + size
  position: absolute;
  top: 15px;
  left: 15px;
  height: 18px;
  width: 18px;

  // background
  background-color: ${props => (props.checked ? '#000000' : '#ffffff')};

  // border
  border: solid 2px #808080;
  border-radius: 2px;

  // the tick, this component condition, then other component changes
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
