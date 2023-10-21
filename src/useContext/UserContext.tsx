import { createContext } from "react";

interface UserContextType {

  user:
    | {
        id: number;
        nickname: string;
        email: string;
        token: string;
      }
    | undefined;
  setCurrentUser: (
jwy:
    user:
      | { id: number; nickname: string; email: string; }
      | undefined
  ) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
