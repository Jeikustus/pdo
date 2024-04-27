"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUser, LogOut } from "lucide-react";
import { useFetchUserData } from "@/config/firebase/firebaseFetchUser";
import { Button } from "@/components/ui/button";
import { handleLogout } from "./functions";

const DashboardPage = () => {
  const userData = useFetchUserData();
  console.log(userData);

  return (
    <div>
      {userData && (
        <>
          <Avatar>
            <AvatarImage
              src={userData.userProfileURL}
              alt={userData.userDisplayName}
            />
            <AvatarFallback>
              <CircleUser size="24" />
            </AvatarFallback>
          </Avatar>
          <h1>{userData.userDisplayName}</h1>
          <p>Email: {userData.userEmail}</p>
        </>
      )}
      <Button variant={"ghost"} size={"sm"} onClick={handleLogout}>
        <LogOut />
      </Button>
    </div>
  );
};

export default DashboardPage;
