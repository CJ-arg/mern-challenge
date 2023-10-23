import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState({});
  const [modalChange, setModalChange] = useState(true);
  return (
    <UserContext.Provider
      value={{ user, setCurrentUser, modalChange, setModalChange }}
    >
      {children}
    </UserContext.Provider>
  );
};
