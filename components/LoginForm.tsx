"use client";

import React, { useState } from "react";
import { CustomButton } from ".";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = (e: React.ChangeEvent<HTMLFormElement>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handlerClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-white grid place-items-center h-screen">
      <div className="shadow-lg p-5 w-[400px] rounded-[5px] border-t-[10px] border-pagecolor">
        <h2 className="font-bold text-[26px] my-5">Enter The Details</h2>

        <form onSubmit={handlerClick} className="flex flex-col gap-3">
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
            title="Login"
            containerStyles="font-bold text-[20px] mt-[10px] "
          />

          {error && (
            <div className="w-fit bg-red-700 text-white py-1 px-3 rounded-md mt-4">
              Error message
            </div>
          )}

          <Link
            href={"/register"}
            className="text-[14px] font-bold mt-2 text-right"
          >
            Dont have a account?
            <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
