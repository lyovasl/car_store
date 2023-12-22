"use client";
import React from "react";
import { RegisterForm } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Register = () => {
  return <RegisterForm />;
};

export default Register;
