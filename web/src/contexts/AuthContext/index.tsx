import { useState, createContext, Dispatch } from "react";
import { IUserData } from "../../types/UserDataType";

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
