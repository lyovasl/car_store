"use client";
import React, { useState } from "react";
import { CustomButton } from ".";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Fill in all required fields.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registrations:", error);
    }
  };

  return (
    <>
      <div className=" bg-white grid place-items-center h-screen">
        <div className="shadow-lg p-5 w-[400px]  rounded-[5px] border-t-[10px] border-pagecolor">
          <h2 className="font-bold text-[26px] my-5">Register</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <CustomButton
              title="Register"
              btnType="submit"
              containerStyles="font-bold text-[20px] mt-[10px] "
            />

            {error && (
              <div className="w-fit bg-red-700 text-white py-1 px-3 rounded-md mt-4">
                {error}
              </div>
            )}

            <Link href={"/login"} className="text-[14px] font-bold mt-2 text-right">
              Already have an account
              <span className="underline">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
