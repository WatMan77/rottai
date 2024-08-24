import { useState } from "react";
import styled from "styled-components";

export const H1 = styled.h1`
  background-image: linear-gradient(90deg, #066b2e, #24119f);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  width: max-content;
  padding: 0;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 20px 0;
  width: 100%;
`;

const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.focused || props.hasValue ? "-20px" : "15px")};
  left: 20px;
  background: transparent;
  padding: 0 5px;
  color: ${(props) => (props.focused ? "#007bff" : "#757575")};
  font-size: ${(props) => (props.focused || props.hasValue ? "12px" : "16px")};
  transition: all 0.3s ease;
  pointer-events: none;
`;

const InputField = styled.input`
  width: calc(100% - 40px);
  padding: 18px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 25px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
`;

// eslint-disable-next-line react/prop-types
export function CustomInput({ label, ...inputProps }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Container>
      <InputField
        {...inputProps}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          setValue(e.target.value);
          if (inputProps.onChange) inputProps.onChange(e); // Allow external onChange handling
        }}
      />
      <InputLabel focused={focused} hasValue={value}>
        {label}
      </InputLabel>
    </Container>
  );
}
