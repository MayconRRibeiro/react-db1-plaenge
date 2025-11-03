import React, { useState, type PropsWithChildren } from "react";

interface AuthContextProps {
  authed: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authed, setAuthed] = useState(false);

  const login = () =>
    new Promise<void>((resolve) => {
      setAuthed(true);
      resolve();
    });

  const logout = () =>
    new Promise<void>((resolve) => {
      setAuthed(false);
      resolve();
    });

  const contextValue = { authed, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
