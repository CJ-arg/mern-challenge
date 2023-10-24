import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}
interface User {
  id: number;
  nickname: string;
  email: string;
  token: string;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState<User>();
  const [modalChange, setModalChange] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <UserContext.Provider
      value={{
        user,
        setCurrentUser,
        modalChange,
        setModalChange,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
