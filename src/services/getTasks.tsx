import userApi from "./userApi";

const email = "testU005@gmail.com";
const password = "123456";
export const getTasks = async () => {
  try {
    const resp = await userApi.get("tasks");
    console.log(resp);
  } catch (error) {
    ("error");
  }
};
export const postLogin = async () => {
  try {
    const resp = await userApi.post("auth", { email, password });
    console.log(resp);
  } catch (error) {
    console.log({ error });
  }
};
