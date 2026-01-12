"use client";

import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { saveUser } from "@/lib/firestore";

const Login = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUser(result.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
