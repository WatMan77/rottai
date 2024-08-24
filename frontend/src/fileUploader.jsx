import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

export const SingleFileUploader = ({ setBase64Image, setImageType }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = async (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
    if (file != null)
      {
          const options = {
              maxSizeMB: 1,
              useWebWorker: true,
              alwaysKeepResolution: true,
              initialQuality: 0.04,
          }
          const fileBase64 = await toBase64(await imageCompression(file, options))
          setBase64Image(fileBase64);
          setImageType(file.type);
      }
  };


  return (
    <>
      <div>
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
      )}
    </>
  );
};
