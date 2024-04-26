import { logoutUser } from "@/config/firebase/firebaseAuthentication";

export const handleLogout = async () => {
    logoutUser();
    window.location.href = "/";
  };