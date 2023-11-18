import styled from "styled-components";

interface IProps{
  color:'yellow' |'green';
}
export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: ${props=> props.color === 'yellow'? props.theme.yellow700:props.theme.green500};
  color: ${props=> props.color === 'yellow'? props.theme.gray700:props.theme.white};
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin-top:0.125rem;
`;