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
