import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}
// const initialUser = {
//   id: 1213,
//   nickname: "Carlos HardCode",
//   email: "hardcode@gmail.com",
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTJlN2UzNzQ4YmVlYTgyZmM3NTE1MzkiLCJpYXQiOjE2OTc4MTc4NzMsImV4cCI6MTY5Nzk5MDY3M30.3etiMG4cqUb4-2b8YnPGz0o5lXetMELCumem8qUETOY",
// };
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ hola: "Mundo", user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
