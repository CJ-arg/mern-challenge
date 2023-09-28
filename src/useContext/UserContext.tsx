import { createContext } from "react";

interface UserContextType {
  Hola: string;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
