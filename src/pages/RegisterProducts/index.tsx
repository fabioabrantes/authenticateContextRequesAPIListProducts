import { Link, useNavigate } from "react-router-dom";

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  UserSchemaRegisterProducts,
  UserSchemaRegisterProductsType} 
  from '../../util/validationRegisterProducts';

import {ButtonComponent} from "../../components/Button";

import {api} from '../../api/axios';

import {Container,ContentForm,Input,Label,LabelError,LabelHome,Strong} from "./styles";

export function RegisterProducts(){
  const {register, handleSubmit, formState:{ errors }} = useForm<UserSchemaRegisterProductsType>({
    resolver:zodResolver(UserSchemaRegisterProducts),
  });

  const navigate = useNavigate();

  async function handleRegisterProduct(data:UserSchemaRegisterProductsType){
    try {
      const response = await api.post('products/register',data);
      console.log(response.data)
      
      navigate("/home");
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>
      <ContentForm onSubmit={handleSubmit(handleRegisterProduct)}>
        <Label>CADASTRAR SEU PRODUTO</Label>
          <Input
              type="text"
              placeholder="Digite seu nome do produto"
              {...register('name')}
            />
            {errors.name?.message && <LabelError>{errors.name.message}</LabelError>}

            <Input
              type="number"
              placeholder="Digite o preço do produto"
              {...register('price')}
            />
            {errors.price?.message && <LabelError>{errors.price.message}</LabelError>}

            <Input
              type="text"
              placeholder="Informe a descrição do produto"
              {...register('descriptions')}
            />
            {errors.descriptions?.message && <LabelError>{errors.descriptions.message}</LabelError>}

          <ButtonComponent color='yellow' type="submit" text="Cadastrar" />
 
          <LabelHome>
            voltar para lista de seus produtos
            <Strong>
              <Link to="/home">&nbsp;voltar</Link>
            </Strong>
          </LabelHome>
      </ContentForm>
    </Container>
  );
}