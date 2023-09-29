import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

// const initialUser = {
//   id: 1213,
//   name: "Carlos HardCode",
//   email: "hardcode@gmail.com",
// };

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ hola: "Mundo", user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
