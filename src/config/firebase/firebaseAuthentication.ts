import { createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase, signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase, sendPasswordResetEmail, Auth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { conAuth, conDatabase } from "./firebaseConfig";


export const createUserWithEmailAndPassword = async (
  userEmail: string,
  userPassword: string,
  userDisplayName: string,
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

    switch (userDepartment) {
      case "City Engineering Office":
        userDocPath = `accounts/users/ceo/${uid}`;
        break;
      case "City Mayors Office":
        userDocPath = `accounts/users/cmo/${uid}`;
        break;
      case "Department of General Services":
        userDocPath = `accounts/users/dgs/${uid}`;
        break;
      case "Office Strategic Management":
        userDocPath = `accounts/users/osm/${uid}`;
        break;
      case "Community Affairs Office":
        userDocPath = `accounts/users/cao/${uid}`;
        break;
      case "Manduae City Enforcement Unit":
        userDocPath = `accounts/users/mceu/${uid}`;
        break;
      case "Purok Development Office":
        userDocPath = `accounts/users/pdo/${uid}`;
        break;
      case "City Admin":
        userDocPath = `accounts/users/cityadmin/${uid}`;
        break;
      default:
        throw new Error("Invalid department specified.");
    }

    const userData = {
      userID: uid,
      userEmail,
      userDisplayName,
      userDepartment,
      userAccountType: "Viewer",
      userAccountStatus: "Pending",
      authProvider: "local",
    };

    if (userDocPath) {
      await setDoc(doc(conDatabase, userDocPath), userData);
      console.log("User document created successfully");
    } else {
      throw new Error("Invalid division specified.");
    }
  } catch (error) {
    console.error("Error creating user document:", error);
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
