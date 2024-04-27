"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFetchUserData } from "@/config/firebase/firebaseFetchUser";
import { CircleUser } from "lucide-react";
import Image from "next/image";

type Props = {
  params: {
    userID: string;
  };
};

export default function UserDetails({ params: { userID } }: Props) {
  const userData = useFetchUserData();

  return (
    <main className="px-24 pt-5 h-screen">
      <div className="grid grid-cols-6">
        <div className="bg-green-100 col-span-2 ">
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md m-5 min-h-full">
            <div className="flex items-center pb-5">
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-accent animate-spin">
                <Image
                  src="/testpp.jpg"
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="flex flex-col space-y-3 mx-5">
                <Button>Change Profile</Button>
                <Button>Delete Account</Button>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-4xl">
                {userData && userData.userDisplayName}
              </h1>
              <Separator />
              <div>
                <div className="flex items-center space-x-2">
                  <em className="text-[10px] text-slate-400">Department:</em>
                  <p className="font-bold text-slate-400">
                    {userData && userData.userDepartment}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <em className="text-[10px] text-slate-400">Account Type:</em>
                  <p className="font-bold text-slate-400">
                    {userData && userData.userAccountType}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p>{userData && userData.userBio}</p>
            </div>
            <div className="flex pt-10 text-[10px] space-x-2 text-slate-400 animate-pulse font-mono">
              <em>user id: </em>
              <p>{userID}</p>
            </div>
          </div>
        </div>
        <div className="bg-red-100 col-span-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-md m-5 min-h-96"></div>
        </div>
      </div>
    </main>
  );
}
