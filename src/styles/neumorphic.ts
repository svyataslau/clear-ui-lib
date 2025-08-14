import styled, { createGlobalStyle } from 'styled-components';

// Global styles for neumorphic design
export const NeumorphicGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Courier New', Courier, monospace;
  }
`;

// Neumorphic background colors
export const NeumorphicBackground = styled.div`
  background: rgb(236 240 243);
`;

export const NeumorphicClassic = styled.div`
  background: #f0f0f3;
`;

// Neumorphic shadow styles
export const NeumorphicShadow = styled.div`
  box-shadow: 18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff;
`;

export const NeumorphicInset = styled.div`
  box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #ffffff;
`;

export const NeumorphicPressed = styled.div`
  box-shadow: inset 18px 18px 30px #c7ccd3, inset -18px -18px 30px #ffffff;
`;

export const NeumorphicCard = styled.div`
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
`;

export const NeumorphicInput = styled.div`
  box-shadow: inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff;
`;

export const NeumorphicConvex = styled.div`
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px #aeaece 40%;
`;

export const NeumorphicConcave = styled.div`
  box-shadow: inset -10px -10px 10px #aeaece 25%, inset 10px 10px 10px #ffffff;
`;

// Custom Input Styles
export const StyledInput = styled.input`
  max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: rgb(236 240 243);
  box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;

  &:focus {
    background: rgb(236 240 243);
    box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
  }
`;

// Custom Card Styles
export const StyledCard = styled.div`
  width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 6px 6px 5px #bebebe, -6px -6px 5px #ffffff;
`;

// Switch Component Styles
export const SwitchContainer = styled.div`
  position: relative;
  width: 150px;
  height: 60px;
  background: rgb(236 240 243);
  border-radius: 50px;
  box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
`;

export const ToggleCheckbox = styled.input`
  display: none;
`;

export const Switch = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
`;

export const Toggle = styled.div<{ checked?: boolean }>`
  position: absolute;
  width: 80px;
  height: 50px;
  background: ${props => props.checked 
    ? 'linear-gradient(308deg, #ffffff, #d2d2d2)' 
    : 'linear-gradient(145deg, #d2d2d2, #ffffff)'};
  border-radius: 50px;
  top: 5px;
  left: ${props => props.checked ? '65px' : '5px'};
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px #c8c8c8;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;

  &:hover {
    box-shadow: -4px -4px 12px #ffffff, 4px 4px 12px #c8c8c8;
  }
`;

export const Led = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 10px;
  height: 10px;
  background: ${props => {
    if (props.disabled) return '#808080';
    if (props.checked) return '#a855f7';
    return '#808080';
  }};
  border-radius: 50%;
  box-shadow: ${props => props.checked 
    ? '0 0 15px 4px #a855f7' 
    : '0 0 10px 2px rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease-in-out;
`;

// Gradient button styles
export const GradientButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  cursor: pointer;
  border: none;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: ghostwhite;
  overflow: hidden;

  svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
  }

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Utility styled components
export const NeumorphicLight = styled.div`
  background-color: #ffffff;
`;

export const NeumorphicDark = styled.div`
  background-color: #d1d9e6;
`;
