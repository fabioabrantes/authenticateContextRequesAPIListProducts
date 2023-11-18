import {z} from 'zod';

export const UserSchemaRegisterProducts = z.object({
  name:z.string().nonempty({message:'nome obrigatório'}),
  price:z.preprocess((val) => Number(val),z.number({required_error: "preço obrigatório",invalid_type_error: "preço deve ser um número",})),
  descriptions:z.string({required_error: "descrição obrigatório",invalid_type_error: "descrição deve ser um texto",}),
});

export type UserSchemaRegisterProductsType = z.infer<typeof UserSchemaRegisterProducts>;

