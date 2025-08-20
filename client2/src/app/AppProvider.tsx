"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  sessionToken: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSessionToken: (sessionToken: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  initSessionToken = "",
}: {
  children: React.ReactNode;
  initSessionToken?: string;
}) {
  const [sessionToken, setSessionToken] = useState(initSessionToken);
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </AppContext.Provider>
  );
}
