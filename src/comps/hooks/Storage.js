import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFireStore,
  timeStamp,
} from '../../firebase-config/firebase-config';
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);
  useEffect(() => {
    // Giving the references in the Firebase collection
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('images');
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let uploadPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(uploadPercentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const imageURL = await storageRef.getDownloadURL();
        collectionRef.add({
          url: imageURL,
          createdAt: timeStamp(),
        });
        setURL(imageURL);
      }
    );
  }, [file]);
  return {
    progress,
    url,
    error,
  };
};
export default useStorage;
