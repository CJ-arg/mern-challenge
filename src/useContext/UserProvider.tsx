import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  nickname: string;
  email: string;
  token: string;
}
interface Task {
  title: string;
  description?: string;
  status: string;
  user: {
    id: string;
    nombre: string;
  };
}
interface Data {
  msg: Task[];
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState<User>();
  const [modalChange, setModalChange] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<Data>();
  return (
    <UserContext.Provider
      value={{
        TasksState,
        data,
        setData,
        user,
        setCurrentUser,
        modalChange,
        setModalChange,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
