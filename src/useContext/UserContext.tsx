import { createContext } from "react";

interface UserContextType {
  modal: boolean;
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
  setModalChange: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
