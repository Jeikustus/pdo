"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUser, LogOut } from "lucide-react";
import { useFetchUserData } from "@/config/firebase/firebaseFetchUser";

const DashboardPage = () => {
  const userData = useFetchUserData();

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
    </div>
  );
};

export default DashboardPage;
