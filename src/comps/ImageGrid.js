import React from 'react';
import Firestore from './hooks/Firestore';

const ImageGrid = () => {
  const { doc } = Firestore('images');
  console.log(doc);
  return <div className='img-grid'>images</div>;
};
export default ImageGrid;
