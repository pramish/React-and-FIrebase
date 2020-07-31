import React, { useEffect } from 'react';
import useStorage from './hooks/Storage';
import '../index.css';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div style={{ width: progress + '%' }} className='progress-bar'></div>;
};
export default ProgressBar;
