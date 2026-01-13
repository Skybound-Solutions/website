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
      <button
        onClick={handleSignIn}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
