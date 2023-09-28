import { createContext } from "react";

interface UserContextType {
  hola: string;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
