import React, { useState, useEffect } from "react";
import { CustomInput, InputsWrapper } from "./common/Inputs";
import styled from "styled-components";

function Phone({ phone, setPhone }) {
  const [curPhoneBuf, setCurBuf] = useState("");
  const [newNumBuf, setNewNumBuf] = useState(0);

  const addNumber = () => {
    setCurBuf((n) => n + newNumBuf);
    setPhone(curPhoneBuf);
  };
  const removeNumber = () => {
    setCurBuf((n) => n.substring(0, n.length - 1));
    setPhone(curPhoneBuf);
  };

  useEffect(() => {
    setPhone(curPhoneBuf);
  }, [curPhoneBuf, setPhone]);

  useEffect(() => {
    // Set up an interval to update newNum every second
    const intervalId = setInterval(() => {
      setNewNumBuf((prevNum) => {
        prevNum += 1;
        if (prevNum >= 10) {
          prevNum = 0;
        }

        return prevNum;
      }); // Increment newNum by 1 every second
    }, 250);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <InputsWrapper>
      <div>
        <CustomInput
          label="Phone number"
          type="text"
          value={curPhoneBuf + newNumBuf}
          readOnly
        />
        {/* Phone number:
            <input type="text" value={curPhoneBuf + newNumBuf} readOnly/> */}
      </div>

      <FlexSpaceAround>
        <button type="button" onClick={addNumber}>
          Add!
        </button>

        <button type="button" onClick={removeNumber}>
          Wait no
        </button>
      </FlexSpaceAround>
    </InputsWrapper>
  );
}

const FlexSpaceAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Phone;
