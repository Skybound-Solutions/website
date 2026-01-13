"use client";
import Login from "@/components/auth/Login";

export default function LoginPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Project Manager</h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to access your projects.
        </p>
        <Login />
      </div>
    </div>
  );
}
