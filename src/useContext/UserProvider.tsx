import { ReactNode, useReducer, useState } from "react";
import { UserContext, UserLogin } from "./UserContext";
import { tasksReducer } from "./tasksReducer";
import { autoLogout } from "../services/getTasks";
import userApi from "../services/userApi";
import Swal from "sweetalert2";
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
const onLogout = (title: string, text: string): void => {
  Swal.fire(title, text, "error");
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const initialState = { loggedIn: false };
  const [tasksState, dispatch] = useReducer(tasksReducer, initialState);
  const [user, setCurrentUser] = useState<User>();
  const [modalChange, setModalChange] = useState(false);
  const [data, setData] = useState<Data>();

  const login = async (user: UserLogin) => {
    try {
      const { data } = await userApi.post("auth", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", data.token);
      console.log(data);
      dispatch({ type: "login" });
    } catch (error) {
      // onLogout("No Autorizado", "No Autorizado");
      dispatch({ type: "Error", payload: "Error de Servidor" });
    }
  };
  const logout = () => {
    autoLogout();
    onLogout("CIERRE DE SESION", "DESLOGUEARSE");
    dispatch({ type: "logout" });
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
