import { 
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
  type UploadMetadata
} from 'firebase/storage';
import { storage } from './firebase';

export const uploadFile = async (
  path: string,
  file: File,
  metadata?: UploadMetadata
) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return { url: downloadURL, error: null };
  } catch (error) {
    return { url: null, error };
  }
};

export const getFileURL = async (path: string) => {
  try {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    return { url, error: null };
  } catch (error) {
    return { url: null, error };
  }
};

export const deleteFile = async (path: string) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    return { error: null };
  } catch (error) {
    return { error };
  }
};

export const listFiles = async (path: string) => {
  try {
    const storageRef = ref(storage, path);
    const res = await listAll(storageRef);
    const urls = await Promise.all(
      res.items.map(itemRef => getDownloadURL(itemRef))
    );
    return { urls, error: null };
  } catch (error) {
    return { urls: [], error };
  }
};