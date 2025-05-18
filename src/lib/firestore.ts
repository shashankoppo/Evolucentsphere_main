import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  type DocumentData,
  type QueryConstraint
} from 'firebase/firestore';
import { db } from './firebase';

export const createDocument = async <T extends DocumentData>(
  collectionName: string,
  data: T,
  id?: string
) => {
  try {
    const docRef = id ? doc(db, collectionName, id) : doc(collection(db, collectionName));
    await setDoc(docRef, { ...data, createdAt: new Date() });
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error };
  }
};

export const getDocument = async <T extends DocumentData>(
  collectionName: string,
  id: string
) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { data: docSnap.data() as T, error: null };
    }
    return { data: null, error: 'Document not found' };
  } catch (error) {
    return { data: null, error };
  }
};

export const queryDocuments = async <T extends DocumentData>(
  collectionName: string,
  constraints: QueryConstraint[] = []
) => {
  try {
    const q = query(collection(db, collectionName), ...constraints);
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as (T & { id: string })[];
    return { documents, error: null };
  } catch (error) {
    return { documents: [], error };
  }
};

export const updateDocument = async <T extends DocumentData>(
  collectionName: string,
  id: string,
  data: Partial<T>
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, { ...data, updatedAt: new Date() });
    return { error: null };
  } catch (error) {
    return { error };
  }
};

export const deleteDocument = async (
  collectionName: string,
  id: string
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error) {
    return { error };
  }
};

// Helper functions for common queries
export const queryBuilder = {
  where,
  orderBy,
  limit
};