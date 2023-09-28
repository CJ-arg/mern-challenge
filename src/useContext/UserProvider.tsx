import { ReactNode } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}
interface User {
  id: number;
  name: string;
  email: string;
}

const user = {
  id: 1213,
  name: "Carlos HardCode",
  email: "hardcode@gmail.com",
};

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ Hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
