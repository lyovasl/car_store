"use client";
import React from "react";
import { RegisterForm } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return <RegisterForm />;
};

export default Register;
