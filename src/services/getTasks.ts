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
const onLogout = (text: string): void => {
  Swal.fire("Error en la autenticacion", text, "error");
};
export const getTasks = async (): Promise<void> => {
  try {
    const resp = await userApi.get("tasks");
    console.log(resp);
  } catch (error) {
    ("error");
  }
};
export const postLogin = async ({ email, password }: UserLogin) => {
  try {
    const { data } = await userApi.post("auth", { email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    console.log(data);
  } catch (error) {
    onLogout("No Autorizado");
  }
};
export const postRegister = async ({
  email,
  password,
  nickname,
}: UserRegister) => {
  console.log(email, password, nickname);
  try {
    const { data } = await userApi.post("auth/new", {
      nickname,
      email,
      password,
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    console.log(data);
  } catch (error) {
    onLogout(error.response.data?.msg);
  }
};
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
    onLogout("expiro el  TOKEN");
  }
};
