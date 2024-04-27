"use client";

import { conAuth } from "@/config/firebase/firebaseConfig";
import { useEffect } from "react";

export function ProtectedRouteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const unsubscribe = conAuth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "/authentication";
      }
    });

    return () => unsubscribe();
  });

  return <>{children}</>;
}
