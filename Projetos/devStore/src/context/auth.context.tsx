import React, { useState, type PropsWithChildren } from "react";

export interface User {
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) =>
    new Promise<void>((resolve) => {
      setUser(userData);
      resolve();
    });

  const logout = () =>
    new Promise<void>((resolve) => {
      setUser(null);
      resolve();
    });

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
