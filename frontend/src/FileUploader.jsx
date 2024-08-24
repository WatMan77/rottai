import React, { useEffect, useState } from "react";
import imageCompression from "browser-image-compression";
import styled from "styled-components";

export const SingleFileUploader = ({ pdfImage, setBase64Image }) => {
  const [file, setFile] = useState(null);
  const handleFileChange = async (event) => {
    if (event?.target?.files) {
      const options = {
        maxSizeMB: 1,
        useWebWorker: true,
        alwaysKeepResolution: true,
        initialQuality: 0.04,
        maxWidthOrHeight: 512,
      };
      const fileBase64 = await toBase64(
        await imageCompression(event.target.files[0], options)
      );
      setBase64Image(fileBase64);
      setFile(event.target.files[0]);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  

  const [showBigThumbsUp, setShowBigThumbsUp] = useState(false);
  useEffect(() => {
    // if (pdfImage) then show big thumbs up for 2 seconds
    if (pdfImage) {
      setShowBigThumbsUp(true);
      setTimeout(() => {
        setShowBigThumbsUp(false);
      }, 2000);
    }
  }, [pdfImage]);

  return (
    <>
      <FileInputContainer>
        {pdfImage ? (
          <>
            <Img src={`${pdfImage}`} />
            {showBigThumbsUp && <BigText>👍</BigText>}
          </>
        ) : (
          <>
            <FileInputLabel htmlFor="file">
              <FileInputIcon>⬆️</FileInputIcon>{" "}
              {/* You can replace this with an actual SVG icon */}
              Upload Profile Picture
            </FileInputLabel>
            <HiddenFileInput
              id="file"
              type="file"
              onChange={handleFileChange}
            />
          </>
        )}
      </FileInputContainer>
      {/* <div>
        <label htmlFor="file" className="sr-only">
          Portait:
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )} */}
    </>
  );
};
const FileInputContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
  `;

  const FileInputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 36px);
    padding: 20px;
    border: 2px dashed #5b9ccf;
    border-radius: 15px;
    background: #5b939826;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #375c6025;
    }
  `;

  const HiddenFileInput = styled.input`
    display: none;
  `;

  const FileInputIcon = styled.div`
    margin-bottom: 10px;
    font-size: 24px;
    color: #5b9ccf;
  `;
const BigText = styled.span`
  position: absolute;
  left: 50px;
  top: -120px;
  font-size: 20rem;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10%;
`;
