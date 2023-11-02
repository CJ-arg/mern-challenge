interface Task {
  title: string;
  description?: string;
  status: string;
  user: {
    id: string;
    nombre: string;
  };
}
