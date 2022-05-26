import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import{
    GoogleAuthProvider,
    getAuth, 
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc, 
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgqb7Q4tJOl3NgyoH_F3wYL7i6CsQNEhY",
    authDomain: "nsitf-claims.firebaseapp.com",
    projectId: "nsitf-claims",
    storageBucket: "nsitf-claims.appspot.com",
    messagingSenderId: "129823476655",
    appId: "1:129823476655:web:379c50ed6ddd37e35ebd5a"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup =() => signInWithPopup(auth, googleProvider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
        const docRef= doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async ()  => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] =items;
        return acc;

    },
{});
return categoryMap;
}


export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation={}
    ) =>{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);   
    const userSnapshot =await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password)=> {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=> {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth, callback);