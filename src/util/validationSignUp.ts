import {z} from 'zod';

export const UserSchemaSignUp = z.object({
  name:z.string().nonempty({message:'nome obrigatório'}),
  email:z.string().nonempty({message:'email obrigatório'}).email({message:'error: email inválido'}),
  password:z.string().nonempty({message:'senha obrigatório'}).min(4,{message:'Error: password menor ou igual a 3 caracteres'}),
  confirmPassword:z.string().nonempty({message:'confirmar senha obrigatório'})
}).refine(({password,confirmPassword})=>password===confirmPassword,{
  message:'Errors: Passwords não são iguais',
  path:["confirmPassword"]
});

export type UserSchemaSignUpType = z.infer<typeof UserSchemaSignUp>;

export const UserSchemaSignIn = z.object({
  email:z.string().email({message:'error: email inválido'}),
  password:z.string().min(4,{message:'Error: password menor ou igual a 3 caracteres'}),
});
export type UserSchemaSignInType = z.infer<typeof UserSchemaSignIn>;
