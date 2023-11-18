import { Scroll, Timer } from 'phosphor-react';
import {NavLink} from 'react-router-dom';

import logoIFPB from '../../assets/LogoIFPB.png';
import { HeaderContainer } from './styles';

interface IProps{
  menu:boolean;
}
export function Header({menu}:IProps) {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIFPB} alt="" />
      </span>
      {
        menu && (
          <nav>
            <NavLink to="/home" title="lista de produtos">
              <Timer size={24} />
            </NavLink>
            <NavLink to='/product/register'title="Cadastro produto">
              <Scroll size={24} />
            </NavLink>
          </nav>
        )
      }
      
    </HeaderContainer>
  )
}