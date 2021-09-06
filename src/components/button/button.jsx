import styled, { css ,keyframes } from "styled-components";

const SIZES = {
  md: css`
    --button-width: 256px;
    --button-height: 55px;
    --button-font-size: 15px;
    --button-padding: 2px;
    --button-radius: 12px;
  `,
};

const VARIANTS = {
  default: css`
    --button-color: #202024;
    --button-bg-color: linear-gradient(320.66deg, #48DC63 14.75%, #369E49 84.81%),
                       linear-gradient(320.66deg, #01AA68 14.75%, #00D381 84.81%);
    --button-hover-bg-color: #218838;
  `,
};

function Button({ disabled, size, variant, children }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
    >
      {children}
    </StyledButton>
  );
}

const pulse = keyframes`
    from {
        box-shadow: 0 0 0 0 #369E49;
    }
`;

const StyledButton = styled.button`
    ${(p) => p.sizeStyle}
    ${(p) => p.variantStyle}

    width: var(--button-width);
    height: var(--button-height);
    margin: 0 auto;
    padding: var(--button-padding);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: none;
    cursor: pointer;
    font-family: Space Mono;
    font-weight: bold;
    font-size: var(--button-font-size, 1rem);
    color: var(--button-color, #ffffff);
    letter-spacing: -0.41px;
    &:active,
    &:hover,
    &:focus {
        box-shadow: 0 0 0 8px transparent;
        animation: ${pulse} 1s;
    }
    &:disabled {
        cursor: default;
        opacity: 0.5;
        background: var(--button-bg-color, #025ce2);
    }
`;

export default Button;