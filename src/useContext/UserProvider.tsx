import { ReactNode, useReducer, useState } from "react";
import { UserContext, UserLogin } from "./UserContext";
import { tasksReducer } from "./tasksReducer";
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
interface Data {
  msg: Task[];
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const onLogout = (title: string, text: string): void => {
    Swal.fire(title, text, "error");
  };
  const autoLogout = (): void => {
    localStorage.clear();
    onLogout("CIERRE DE SESION", "DESLOGUEARSE");
  };
  const initialState = { loggedIn: false, msg: [], user: {}, task: {} };
  const [tasksState, dispatch] = useReducer(tasksReducer, initialState);
  const [user, setCurrentUser] = useState<User>();
  const [modalChange, setModalChange] = useState(false);

  const login = async (user: UserLogin) => {
    try {
      const { data } = await userApi.post("auth", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", data.token);
      dispatch({ type: "login" });
    } catch (error) {
      // onLogout("No Autorizado", "No Autorizado");
      dispatch({ type: "Error", payload: "Error de Servidor" });
    }
  };
  const logout = () => {
    autoLogout();
    onLogout("CIERRE DE SESION", "Te has deslogueado con exito");
    dispatch({ type: "logout" });
  };

  const getTasks = async (): Promise<void> => {
    try {
      const { data } = await userApi.get("tasks");
      dispatch({ type: "getTasks", payload: data.msg });
    } catch (error) {
      ("error");
    }
  };
  const postRegister = async ({ email, password, nickname }: UserRegister) => {
    try {
      const { data } = await userApi.post("auth/new", {
        nickname,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      dispatch({ type: "postRegister", payload: data });
    } catch (error) {
      onLogout(error.response.data?.msg);
    }
  };
  const saveTask = async ({
    title,
    description,
    status,
    project,
  }: TaskSave) => {
    try {
      const { data } = await userApi.post("tasks", {
        title,
        description,
        status,
        project,
      });
      dispatch({ type: "saveTask", payload: data.task });
    } catch (error) {
      ("error");
    }
  };
  const deleteTask = async ({ id }: TaskDelete) => {
    try {
      const { data } = await userApi.delete("tasks", {});
      console.log(data, "desde deleteTask");

      dispatch({ type: "saveTask", payload: data.task });
    } catch (error) {
      ("error");
    }
  };
  return (
    <UserContext.Provider
      value={{
        tasksState,
        login,
        logout,
        getTasks,
        user,
        postRegister,
        setCurrentUser,
        modalChange,
        setModalChange,
        saveTask,
        deleteTask,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
