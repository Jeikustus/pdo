"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkWithIcon } from "@/components/ui/linkwithicon";
import { useFetchUserData } from "@/config/firebase/firebaseFetchUser";
import {
  BadgePlus,
  CircleAlert,
  CircleUser,
  CircleX,
  FilePenLine,
  LayoutDashboard,
  LogOut,
  LogOutIcon,
  MessageSquareHeart,
  Search,
  ShieldEllipsis,
  View,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { logoutUser } from "@/config/firebase/firebaseAuthentication";
import { Separator } from "./ui/separator";

export const NavigationBar = () => {
  const userData = useFetchUserData();

  return (
    <nav className="shadow-md px-20">
      <div className="p-5 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex space-x-2 items-center dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-5 w-5 bg-[#00458b] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 bg-[#059d2f] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-5 w-5 bg-[#f2ba03] rounded-full animate-bounce"></div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {userData && (
            <>
              {userData.userAccountType === "Admin" && (
                <>
                  <LinkWithIcon
                    href="/Admin"
                    label="Admin"
                    icon={<ShieldEllipsis />}
                  />
                </>
              )}
              {userData?.userAccountType === "Editor" && (
                <>
                  <LinkWithIcon
                    href="/Editor"
                    label="Editor"
                    icon={<FilePenLine />}
                  />
                </>
              )}
              {userData?.userAccountType === "Viewer" && (
                <>
                  <LinkWithIcon href="/Viewer" label="Viewer" icon={<View />} />
                </>
              )}
            </>
          )}
          <LinkWithIcon
            href="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard />}
          />
          <LinkWithIcon
            href="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard />}
          />
        </div>
        <div className="flex items-center">
          {userData && (
            <div className="flex items-center space-x-3 font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-accent">
                  {userData.userDisplayName}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Ask help</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div className="flex items-center text-sm hover:bg-accent p-1 rounded-sm">
                    <LogOutIcon className="h-4" />
                    <AlertDialog>
                      <AlertDialogTrigger>Logout</AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader className="flex justify-center items-center">
                          <Image
                            src="question.svg"
                            alt="quesrion"
                            priority
                            width={200}
                            height={200}
                          />
                          <AlertDialogTitle className="font-bold text-2xl">
                            Come back soon!
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to Log out?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <Separator />
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={logoutUser}>
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Avatar>
                <AvatarImage
                  src={userData.userProfileURL}
                  alt={userData.userDisplayName}
                />
                <AvatarFallback>
                  <CircleUser size="24" />
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
