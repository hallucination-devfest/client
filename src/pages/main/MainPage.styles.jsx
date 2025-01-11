import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
