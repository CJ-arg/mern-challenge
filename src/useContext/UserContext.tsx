import { createContext } from "react";
export interface UserLogin {
  email: string;
  password: string;
}
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
  tasksState: { loggedIn: boolean };
  login: (user: UserLogin) => Promise<void>;
}

// export const UserContext = createContext<UserContextType | undefined>(
//   undefined
// );
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
