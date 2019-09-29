import React from "react";
import { css, cx } from "emotion";

const cssRadioButton = css`
  font-size: 14px;

  .label {
    cursor: pointer;
    border-radius: 12px;
    color: #757575;
    display: flex;
    align-items: center;
  }

  .radioDot {
    opacity: 0.06;
  }

  .radioOutline {
    opacity: 0.55;
  }

  .text {
    margin-left: 10px;
  }

  .input {
    opacity: 0;
    position: absolute;

    &:focus,
    &:hover {
      & + .label {
        color: initial;
        background-color: #fbfbfc;

        .radioDot {
          opacity: 0.13;
        }

        .radioOutline {
          opacity: 0.7;
        }
      }
    }

    &:checked + .label {
      color: initial;
      background-color: #eee;

      .radioDot,
      .radioOutline {
        opacity: 1;
      }
    }
  }
`;

const RadioButton = (
  name,
  value,
  required,
  children,
  isChecked,
  handleChange,
  className,
  ...props
) => {
  return (
    <div className={cssRadioButton}>
      <input
        className="input"
        id={value}
        name={name}
        value={value}
        required={required}
        type="radio"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <label className={cx("label", className)} htmlFor={value}>
        <svg
          className="svg"
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
          height="16"
          width="16"
          viewBox="0 0 16 16"
        >
          <circle
            className="radioOutline"
            cx="8"
            cy="8"
            r="7"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <circle className="radioDot" cx="8" cy="8" r="4" fill="#000" />
        </svg>
        <span className="text">yo</span>
      </label>
    </div>
  );
}

function App() {
  return <div className="App">
    <RadioButton></RadioButton>
    
  </div>;
}

export default App;
