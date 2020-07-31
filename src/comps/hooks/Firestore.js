import { useState, useEffect } from 'react';
import { projectFireStore } from '../../firebase-config/firebase-config';

const Firestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((value) => {
          documents.push({ ...value.data(), id: value.id });
        });
        setDocs(documents);
      });
    return () => {
      unsub();
    };
  }, [collection]);
  return { docs };
};
export default Firestore;
