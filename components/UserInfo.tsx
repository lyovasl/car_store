"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { CustomButton } from ".";
import { useSession } from "next-auth/react";

type Props = {};

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen ">
      <div className="shadow-lg p-8 w-[400px] bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>

        <CustomButton
          title="Log Out"
          onClick={() => signOut()}
          containerStyles="my-6"
        />
      </div>
    </div>
  );
};

export default UserInfo;
