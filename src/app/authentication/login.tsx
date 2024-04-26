"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/inputwithlabel";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { handleLogin } from "./functions";
import { Building2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppContext } from "@/context";

export const LoginTab = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDepartment, setUserDepartment] = useAppContext();
  const [userPassword, setUserPassword] = useState<string>("");

  const handleDepartmentSelect = (department: string) => {
    setUserDepartment(department);
    console.log(department);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(userEmail, userPassword);
    console.log("Login successful");
  };

  return (
    <div className="p-5 flex flex-col space-y-4 justify-center">
      <div className="pb-4">
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <Label className="opacity-55">Purok Development Office</Label>
      </div>
      <div>
        <div className="flex justify-center space-x-3 pb-4">
          <Button className="w-1/2">Request Account</Button>
          <Button className="w-1/2">Question</Button>
        </div>
        <div className="flex justify-center items-center pb-4 opacity-50">
          <hr className="border-gray-400 w-full" />
          <p className="mx-2">or</p>
          <hr className="border-gray-400 w-full" />
        </div>
        <form className="pb-2" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 pb-4">
            <InputWithLabel
              label="Email"
              type="email"
              id="email"
              placeholder="your@gmail.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <InputWithLabel
              label="Password"
              type="password"
              id="password"
              placeholder="••••••••"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <div>
              <DropdownMenu>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Department</Label>
                  <DropdownMenuTrigger className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground items-center">
                    <Building2 />
                    <p className="text-transparent">t</p> {userDepartment}
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Department</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() =>
                      handleDepartmentSelect("City Engineering Office")
                    }
                  >
                    CEO - City Engineering Office
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDepartmentSelect("City Mayors Office")}
                  >
                    CMO - City Mayors Office
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleDepartmentSelect("Department of General Services")
                    }
                  >
                    DGS - Department of General Services
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleDepartmentSelect("Office Strategic Management")
                    }
                  >
                    OSM - Office Strategic Management
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleDepartmentSelect("Community Affairs Office")
                    }
                  >
                    CAO - Community Affairs Office
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleDepartmentSelect("Manduae City Enforcement Unit")
                    }
                  >
                    MCEU - Manduae City Enforcement Unit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDepartmentSelect("pdo")}
                  >
                    PDO - Purok Development Office
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDepartmentSelect("City Admin")}
                  >
                    City Admin
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center space-x-1">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me">Remember me</Label>
            </div>
            <Label>Forgot Password?</Label>
          </div>
          <div>
            <Button className="w-full">Sign in to your Account</Button>
          </div>
        </form>
        <div className="flex items-center space-x-1 text-sm">
          <p>Don&apos;t have an account yet?</p>
          <p className="font-medium">Sign up here</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center animate-pulse">
        <Image src="/pdo.png" alt="image" width={240} height={100} priority />
      </div>
    </div>
  );
};
