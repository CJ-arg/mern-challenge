import userApi from "./userApi";
import Swal from "sweetalert2";

interface UserLogin {
  email: string;
  password: string;
}
interface UserRegister {
  email: string;
  password: string;
  nickname: string;
}
interface Task {
  title: string;
  description: string;
  status: string;
  project: string;
}

const onLogout = (title: string, text: string): void => {
  Swal.fire(title, text, "error");
};

// export const getTasks = async (): Promise<void> => {
//   try {
//     console.log("pasa por el gettask");

//     const { data } = await userApi.get("tasks");
//     console.log(data, "data");
//     return data;
//   } catch (error) {
//     ("error");
//   }
// };

// export const postLogin = async ({ email, password }: UserLogin) => {
//   try {
//     const { data } = await userApi.post("auth", { email, password });
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("token-init-date", new Date().getTime());
//     console.log(data);
//   } catch (error) {
//     onLogout("No Autorizado", "No Autorizado");
//   }
// };
// export const postRegister = async ({
//   email,
//   password,
//   nickname,
// }: UserRegister) => {
//   console.log(email, password, nickname);
//   try {
//     const { data } = await userApi.post("auth/new", {
//       nickname,
//       email,
//       password,
//     });
//     localStorage.setItem("token", data.token);
//     console.log(data, "asfderwg");
//   } catch (error) {
//     onLogout(error.response.data?.msg);
//   }
// };
export const checkAuthToken = async (): Promise<void> => {
  const token = localStorage.getItem("token");
  if (!token) return onLogout("expiro el  TOKEN");
  try {
    const { data } = await userApi.get("auth/renew");
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    console.log(data);
    // postLogin({ email, password })
  } catch (error) {
    localStorage.clear();
    onLogout("CIERRE DE SESION", "expiro el  TOKEN");
  }
};
// export const autoLogout = (): void => {
//   localStorage.clear();

//   onLogout("CIERRE DE SESION", "DESLOGUEARSE");
// };

export const saveTask = async ({
  title,
  description,
  status,
  project,
}: Task) => {
  try {
    const resp = await userApi.post("tasks", {
      title,
      description,
      status,
      project,
    });
    console.log(resp);
  } catch (error) {
    ("error");
  }
};
