import { ReactNode } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const user = {
  id: 1213,
  name: "Carlos HardCode",
  email: "hardcode@gmail.com",
};

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
