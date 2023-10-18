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
    const resp = await userApi.post("auth", { email, password });
    console.log(resp);
  } catch (error) {
    console.log({ error });
  }
};
