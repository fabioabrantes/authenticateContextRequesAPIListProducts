import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {UserSchemaSignInType,UserSchemaSignIn} from '../../util/validationSignUp';

import {ButtonComponent} from "../../components/Button";
import {useAuth} from "../../hooks/useAuth";

import {Container,Label,LabelSignup,Strong,LabelError, Input, ContentForm} from "./styles";

export function SignIn(){
  const {register, handleSubmit, formState:{ errors }} = useForm<UserSchemaSignInType>({
    resolver:zodResolver(UserSchemaSignIn),
  });

  
  const navigate = useNavigate();
  const {logar} = useAuth();

  async function handleLogin(data:UserSchemaSignInType){
    const {email,password} = data;
    await logar(email,password);
    navigate("/home");
  }

  return (
    <Container>
      <ContentForm onSubmit={handleSubmit(handleLogin)}>
      <Label>SISTEMA DE LOGIN</Label>

        <Input
          type="email"
          placeholder="Digite seu E-mail"
          {...register('email')}
        />
        {errors.email && <LabelError>{errors.email.message}</LabelError>}
        <Input
          type="password"
          placeholder="Digite sua Senha"
          {...register('password')}
        />
        {errors.password && <LabelError>{errors.password.message}</LabelError>}
        
        <ButtonComponent text="Entrar" type="submit"/>
        
        <LabelSignup>
          Não tem uma conta?
          <Strong>
            <Link to="/register">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignup>
      </ContentForm>
    </Container>
  );
}

