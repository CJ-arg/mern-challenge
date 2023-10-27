import { createContext } from "react";

interface UserContextType {
  user:
    | {
        id: number;
        nickname: string;
        email: string;
      }
    | undefined;
  setCurrentUser: (
    user: { id: number; nickname: string; email: string } | undefined
  ) => void;
  modalChange: boolean;
  setModalChange: (modalChange: boolean) => void;
  // loggedIn: boolean;
  // setLoggedIn: (modalChange: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
