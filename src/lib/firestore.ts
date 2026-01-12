import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { User as FirebaseUser } from "firebase/auth";
import { User } from "@/models";

export const saveUser = async (firebaseUser: FirebaseUser) => {
  const user: User = {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
  };

  try {
    await setDoc(doc(db, "users", user.uid), user, { merge: true });
  } catch (error) {
    console.error("Error saving user to Firestore", error);
  }
};
