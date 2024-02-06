import { createContext } from "react";
export interface UserLogin {
  email: string;
  password: string;
}

interface TaskDelete {
  uid: string;
  id: string;
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
  tasksState: { loggedIn: boolean };
  login: (user: UserLogin) => Promise<void>;
  logout: () => Promise<void>;
  postRegister: (user: UserRegister) => Promise<void>;
  saveTask: (taskSave: TaskSave) => Promise<void>;
  deleteTask: (taskDelete: TaskDelete) => Promise<void>;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
