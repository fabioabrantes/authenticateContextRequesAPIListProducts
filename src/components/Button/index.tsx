import {ButtonHTMLAttributes} from 'react';
import {Button} from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text:string;
}
export function ButtonComponent({ text,color, onClick, type = "button" }:IProps){
  return (
    <Button type={type} onClick={onClick} color={color}>
      {text}
    </Button>
  );
}
