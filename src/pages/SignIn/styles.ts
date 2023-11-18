import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow:4;
  margin:4rem;
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: ${props=>props.theme.gray600};
  padding: 60px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${props=>props.theme.gray100};
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: ${props=>props.theme.gray100};
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: ${props=>props.theme.red500};
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${props=>props.theme.yellow500};
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 80%;
  border-radius: 5px;
  font-size: 16px;

  background-color: ${props=> props.theme.gray100};
  border: none;
  margin:0.125rem;
`;