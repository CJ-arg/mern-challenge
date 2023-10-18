import userApi from "./userApi";

export const getTasks = async () => {
  try {
    const resp = await userApi.get("tasks");
    console.log(resp);
  } catch (error) {
    ("error");
  }
};
export const postLogin = async ({ email, password }) => {
  try {
    const { data } = await userApi.post("auth", { email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
};
