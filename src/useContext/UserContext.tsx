import { createContext } from "react";

interface UserContextType {
  hola: string;
  user:
    | {
        id: number;
        nickname: string;
        email: string;
        token: string;
      }
    | undefined;
  setCurrentUser: (
    user:
      | { id: number; nickname: string; email: string; token: string }
      | undefined
  ) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
