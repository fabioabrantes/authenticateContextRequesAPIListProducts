import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-height: 80vh;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.gray100};
`;

export const ProductsList = styled.div`
  flex: 1;
  overflow: auto; /* gera uma barra de rolagem quando a tabela é maior que a tela */
  /* margin-top: 2rem; */
  table {
    width: 100%;
    
    min-width: 600px; /* gera um scroll se for menor que isso */
    
    th {
      background-color: ${(props) => props.theme.gray600};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.gray100};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme.gray700};
      border-top: 4px solid ${(props) => props.theme.gray800};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;