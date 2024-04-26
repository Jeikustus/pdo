import { createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, Auth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, sendPasswordResetEmail, } from "firebase/auth";
import {  conAuth, conDatabase } from "./firebaseConfig"; 
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "@firebase/storage";


export const createUserWithEmailAndPassword = async (
  userEmail: string,
  userPassword: string,
  userFirstName: string,
  userLastName: string,
  userDepartment: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPasswordFirebase(
      conAuth,
      userEmail,
      userPassword
    );
    const { uid } = userCredential.user;

    let userDocPath: string | undefined; 

    if (userDepartment === "City Engineers Office") {
      userDocPath = `users/ceo/${uid}`;
    } else if (userDepartment === "City Mayors Office") {
      userDocPath = `users/cmo/${uid}`;
    } else if (userDepartment === "Department General Services") {
        userDocPath = `users/dgs/${uid}`;
    } else if (userDepartment === "Office Strategic Management") {
        userDocPath = `users/osm/${uid}`;
    } else if (userDepartment === "City Affairs Office") {
        userDocPath = `users/cao/${uid}`;
    } else if (userDepartment === "Manduae City Enforcement Unit") {
        userDocPath = `users/mceu/${uid}`;
    } else if (userDepartment === "Purok Development Office") {
        userDocPath = `users/pdo/${uid}`;
    } else if (userDepartment === "City Admin") {
        userDocPath = `users/cityadmin/${uid}`;
    } else {
      throw new Error("Invalid department specified.");
    }

    const userData = {
      userID: uid,
      userEmail,
      userFirstName,
      userLastName,
      userDepartment,
      authProvider: "local",
    };

    if (userDocPath) {
      await setDoc(doc(conDatabase, userDocPath), userData);
    } else {
      throw new Error("Invalid division specified.");
    }
  } catch (error) {
    throw error;
  }
};


export const signInWithEmailAndPassword = async (userEmail: string, userPassword: string) => {
  try {
    const userCredential = await signInWithEmailAndPasswordFirebase(conAuth, userEmail, userPassword);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};


export const resetPassword = async (auth: Auth, userEmail: string) => {
  try {
      await sendPasswordResetEmail(auth, userEmail); 
      console.log("Password reset email sent successfully");
      return userEmail;
  } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
  }
}

export const logoutUser = async (): Promise<void> => {
  try {
    await conAuth.signOut();
  } catch (error) {
    throw error;
  }
};