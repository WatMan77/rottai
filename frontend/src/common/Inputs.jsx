import { useEffect, useState } from "react";
import styled from "styled-components";

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

const SelectField = styled.select`
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
  appearance: none; /* Hide the default arrow */

  &:focus {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: #757575;
`;

// CustomInput Component
export function CustomInput({ label, ...inputProps }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  useEffect(() => {
    if (inputProps.value) {
      setValue(inputProps.value);
    }
  }, [inputProps.value]);

  return (
    <Container>
      <InputField
        {...inputProps}
        value={value || inputProps.value}
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

// CustomSelect Component
export function CustomSelect({ label, options, ...selectProps }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  useEffect(() => {
    if (selectProps.value) {
      setValue(selectProps.value);
    }
  }, [selectProps.value]);

  return (
    <Container>
      <SelectContainer>
        <SelectField
          {...selectProps}
          value={value || selectProps.value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            setValue(e.target.value);
            if (selectProps.onChange) selectProps.onChange(e); // Allow external onChange handling
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectField>
        <ArrowIcon>▼</ArrowIcon>
      </SelectContainer>
      <InputLabel focused={focused} hasValue={value}>
        {label}
      </InputLabel>
    </Container>
  );
}
