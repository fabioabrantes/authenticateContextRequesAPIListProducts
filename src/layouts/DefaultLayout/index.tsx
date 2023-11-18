import {Outlet} from 'react-router-dom';

import { Header } from '../../components/Header';

import { LayoutContainer } from './styles';

interface IProps{
  menu?:boolean;
}
export function DefaultLayout({menu=false}:IProps) {
  return (
    <LayoutContainer>
      <Header menu={menu}/>
      <Outlet />
    </LayoutContainer>
  )
}