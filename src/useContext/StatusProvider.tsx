import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface ProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};