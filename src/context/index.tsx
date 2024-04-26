"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userDepartment, setUserDepartment] = useState("Select Department");

  return (
    <AppContext.Provider value={[userDepartment, setUserDepartment]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
