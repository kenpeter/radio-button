import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  padding: .5em;
  cursor: pointer;
`;

export const Span = styled.span`
  &:before {
    content: "";
    display: inline-block;
    vertical-align: -.25em;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    margin-right: .5em;
  }
`;

export const Input = styled.input`
  &:checked + ${Span} {
    border-color: #e48;
    // bg img cycle
    background-image: radial-gradient(
                      circle closest-side,
                      $accent-color 0%,
                      $accent-color 50%,
                      transparent 50%,
                      transparent 100%);
  }

  display: none;
`;