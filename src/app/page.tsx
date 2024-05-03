"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/authentication";
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-[#00458b] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-[#059d2f] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-[#f2ba03] rounded-full animate-bounce"></div>
    </div>
  );
}
