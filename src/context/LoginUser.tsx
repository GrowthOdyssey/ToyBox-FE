import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export interface LoginUserType {
  id: string;
  name: string;
}

export interface LoginUserContextType {
  loginUser: LoginUserType;
  setLoginUser: Dispatch<SetStateAction<LoginUserType>>;
}

export const LoginUserContext = createContext({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserType>({} as LoginUserType);

  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
};

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
