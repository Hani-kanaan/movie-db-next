"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function Login() {
  const [form, setForm] = useState({ user_name: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEmail = form.user_name.includes("@");

    const credentials = isEmail
      ? { email: form.user_name, password: form.password }
      : { user_name: form.user_name, password: form.password };

    try {
      const res = await loginUser(credentials);
      if (res.data.token) {
        localStorage.setItem("token", res.token);
        alert("Login successful");
        router.push("/");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Login to your account
        </h2>
        <input
          name="user_name"
          type="text"
          onChange={handleChange}
          placeholder="Username or Email"
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full px-4 py-2 mb-6 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-amber-500 text-black py-2 px-4 rounded hover:bg-amber-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
