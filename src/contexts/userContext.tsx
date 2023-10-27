/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { User } from "../types/userTypes";

type UserContextProps = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
  initialUsers: User[];
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export function UserProvider({
  children,
  initialUsers,
}: UserProviderProps): JSX.Element {
  const [users, setUsers] = useState<User[]>(initialUsers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("../../users.json");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
