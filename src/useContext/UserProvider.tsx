import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState({});
  const [modalChange, setCurrentUser] = useState({});
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
