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
  modalChange: boolean;
  setCurrentUser: (
    user:
      | { id: number; nickname: string; email: string; token: string }
      | undefined
  ) => void;
  setModalChange: (modalChange: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
