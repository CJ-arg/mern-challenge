import userApi from "./userApi";
import Swal from "sweetalert2";
interface UserLogin {
  email: string;
  password: string;
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
export const postRegister = async ({ email, password, nickname }) => {
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
