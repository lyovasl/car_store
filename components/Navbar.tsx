"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/login");
  };

  return (
    <header className="w-[1920px]  mx-auto bg-pagecolor py-5">
      <nav className="w-[1400px]  mx-auto flex justify-between items-center sm:px-16px px-6 py-4px">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/images/logo.png" width={146} height={35} alt="Logo" />
        </Link>

        <CustomButton
          onClick={handleSignInClick}
          title="Sign In"
          containerStyles="bg-gray-100 text-slate-900	 font-semibold"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
