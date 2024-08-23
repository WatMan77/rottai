import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

export const SingleFileUploader = ( setBase64Image, setImageType ) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file)
    {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 256,
            useWebWorker: true,
        }
        const fileBase64 = await toBase64(imageCompression(file, options))
        return fileBase64;
    }
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

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

      {file && <button onClick={handleUpload}>Upload a file</button>}
    </>
  );
};
