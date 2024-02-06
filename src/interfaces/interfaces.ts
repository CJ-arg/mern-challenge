interface Task {
  title: string;
  description?: string;
  status: string;
  user: {
    id: string;
    nombre: string;
  };
}
interface UserRegister {
  email: string;
  password: string;
  nickname: string;
}
interface TaskSave {
  title: string;
  description: string;
  status: string;
  project: string;
}
interface TaskDelete {
  id: string;
}
