import {createContext, useEffect, useState} from 'react';

import {api} from '../api/axios';

interface IUser{
  id:string;
  name:string;
}
interface IContextAuth{
  user:IUser |null;
  logar: (email:string,password:string) => Promise<void>;
  deslogar: ()=> Promise<void>;
}
export const AuthContext = createContext({} as IContextAuth);

interface ResponseDataType{
  user:IUser | null,
  token:string;
}
type Props ={
  children:React.ReactNode;
}
export function AuthFornecedor({children}:Props){
  const [user, setUser] = useState<IUser | null>(null);

  async function logar(email:string,password:string):Promise<void>{

    try {
      const data ={
        email,
        password,
      }
      const response = await api.post('auth/login',data);
      const {token,user} = response.data as ResponseDataType;
      console.log('token',token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(user);

      localStorage.setItem('auth.token', token);
      localStorage.setItem('auth.user', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
      
  }
  async function deslogar():Promise<void>{
    setUser(null);
    localStorage.removeItem('auth.token');
    localStorage.removeItem('auth.user');
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('auth.token');
    console.log(token);
    const user = localStorage.getItem('auth.user');
    if(token && user){
      const userObject = JSON.parse(user);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
       setUser(userObject);
    }
    
  },[]);
  return (
    <AuthContext.Provider value={{user,logar,deslogar}}>
       {children}
    </AuthContext.Provider>

  )
}