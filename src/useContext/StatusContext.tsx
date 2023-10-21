import { createContext } from "react";

interface StatusContextType {
  status: { jwt: string } | undefined;
  setCurrentStatus: (status: { jwt: string } | undefined) => void;
}
export const StatusContext = createContext<StatusContextType | undefined>(
  undefined
);
