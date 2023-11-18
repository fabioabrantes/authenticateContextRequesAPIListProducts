import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 4rem);
  margin: 2rem auto;
  padding-inline: 2.5rem;
  background: ${(props) => props.theme.gray800};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;