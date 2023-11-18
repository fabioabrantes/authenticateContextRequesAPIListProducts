import { Link, useNavigate } from "react-router-dom";

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {UserSchemaSignUpType,UserSchemaSignUp} from '../../util/validationSignUp';

import {ButtonComponent} from "../../components/Button";

import {api} from '../../api/axios';

import {Container,ContentForm,Input,Label,LabelError,LabelSignin,Strong} from "./styles";

export function SignUp(){
  const {register, handleSubmit, formState:{ errors }} = useForm<UserSchemaSignUpType>({
    resolver:zodResolver(UserSchemaSignUp),
  });

  const navigate = useNavigate();

  async function handleSignUp(data:UserSchemaSignUpType){
    const {name,email,password} = data;
    try {
      await api.post('users/register',{name,email,password});
      
      navigate("/");
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Container>
      <ContentForm onSubmit={handleSubmit(handleSignUp)}>
        <Label>SISTEMA DE CADASTRO</Label>
          <Input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors.name?.message && <LabelError>{errors.name.message}</LabelError>}

            <Input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email?.message && <LabelError>{errors.email.message}</LabelError>}

            <Input
              type="password"
              placeholder="Informe seu Password"
              {...register('password')}
            />
            {errors.password?.message && <LabelError>{errors.password.message}</LabelError>}

            <Input
              type="password"
              placeholder="confirme seu Password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword?.message && <LabelError>{errors.confirmPassword.message}</LabelError>}

          <ButtonComponent color='yellow' type="submit" text="Inscrever-se" />
 
          <LabelSignin>
            Já tem uma conta?
            <Strong>
              <Link to="/">&nbsp;Entre</Link>
            </Strong>
          </LabelSignin>
      </ContentForm>
    </Container>
  );
}