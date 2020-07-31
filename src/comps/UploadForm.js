import React, { useState } from 'react';
import '../index.css';
import ProgressBar from './ProgressBar';
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const uploadImage = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setError('');
    } else {
      setFile(null);
      setError('Please select an Image file (png or jpeg or jpg)');
    }
  };
  const submitForm = (e) => {};
  return (
    <form onSubmit={submitForm}>
      <input type='file' onChange={uploadImage} />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {/* {file && <div className='imageName'>{file.name}</div>} */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default UploadForm;
