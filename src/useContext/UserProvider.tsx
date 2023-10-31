import { ReactNode, useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "./userReducer";
import { types } from "./types";

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
  const initialState = { loggedIn: false };
  const [tasksState, dispatch] = useReducer(userReducer, initialState);
  const [user, setCurrentUser] = useState<User>();
  const [modalChange, setModalChange] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<Data>();
  const login = () => {
    const action = { type: types.login };
    dispatch(action);
  };
  const logout = () => {
    const action = { type: types.logout };
    dispatch(action);
  };
  return (
    <UserContext.Provider
      value={{
        tasksState,
        login,
        logout,
        // dispatch,
        data,
        setData,
        user,
        setCurrentUser,
        modalChange,
        setModalChange,
        // loggedIn,
        // setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
