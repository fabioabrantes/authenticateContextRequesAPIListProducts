import {Route, Routes} from 'react-router-dom';

import {useAuth} from './hooks/useAuth';

import {DefaultLayout} from './layouts/DefaultLayout';

import {Home} from "./pages/Home";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import { RegisterProducts } from './pages/RegisterProducts';

export function Router() {
  const {user} = useAuth();
  const isLogged = !!user;
  
  return (
    <Routes>
      {
        !isLogged ?
        (
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Route>
        )
        :
        (
          <Route path="/" element={<DefaultLayout menu/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/product/register" element={<RegisterProducts />} />

          </Route>
        )
      }
    </Routes>
  )
}