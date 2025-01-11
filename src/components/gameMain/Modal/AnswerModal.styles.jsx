import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    text-align: center;
    font-size: 14px;
    line-height: 150%;
    word-break: keep-all;
  }
`;

export const Stamp = styled.img`
  position: absolute;
  width: 200px;
`;

export const Input = styled.input`
  text-align: center;
  width: 100%;
  font-size: 16px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.indigo1};
`;
