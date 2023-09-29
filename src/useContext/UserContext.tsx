import { createContext } from "react";

interface UserContextType {
  hola: string;
  user:
    | {
        id: number;
        name: string;
        email: string;
      }
    | undefined;
  setCurrentUser: (
    user: { id: number; name: string; email: string } | undefined
  ) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
