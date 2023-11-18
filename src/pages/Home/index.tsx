import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../api/axios";
import {useAuth} from "../../hooks/useAuth";

import {ButtonComponent} from "../../components/Button";

import {Title,Container,ProductsList} from "./styles";

interface IUser{
  id:number;
  name:string;
  email:string;
}
interface IProduct{
  id:number;
  name:string;
  price:number;
  descriptions:string;
}
interface IProducts{
  products:IProduct[];
}

export function Home (){
  const [userAuth, setUserAuth] = useState<IUser | null>(null);
  const [products, setProducts] = useState<IProducts>({} as IProducts);
  
  const navigate = useNavigate();
  const {user,deslogar} = useAuth();

  async function handleLogout(){
    await deslogar();
    navigate('/')
  }
  
  useEffect(() => {
    async function loadProducts(){

      try {
        const response = await api.get('/products/allByUser');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  },[]);

  return (
    <Container>
      <Title>Olá, {user?.name} segue sua lista de produtos</Title>

      <ProductsList>
        <table>
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
          {products.products?.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name} minutos</td>
                  <td>{product.price}</td>
                  <td>{product.descriptions}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ProductsList>

      <ButtonComponent text="Sair" onClick={handleLogout}>
        Sair
      </ButtonComponent>
    </Container>
  );
}

