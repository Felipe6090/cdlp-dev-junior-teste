import { useState, createContext, Dispatch } from "react";

type IPosts = {
  id: string;
  created_datetime: number;
  userId: string;
  title: string;
  content: string;
};

type IUserData = {
  id: string;
  created_datetime: number;
  username: string;
  password: string;
  posts: IPosts[];
};

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state?: any;
};

type AuthContextType = {
  authData: IUserData;

  setAuthData: Dispatch<any>;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children, state }: IProviderTypes) {
  const [authData, setAuthData] = useState(state);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
