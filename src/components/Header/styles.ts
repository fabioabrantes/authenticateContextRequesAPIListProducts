import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  margin-top: 1rem;
  nav{
    display:flex;
    gap:1.2rem; 

    a{
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.gray100};
      border-bottom: 3px solid transparent;

      &:hover{
        border-bottom: 3px solid ${(props) => props.theme.green500};
      }

    }
  }
`;

