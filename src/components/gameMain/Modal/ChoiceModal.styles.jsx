import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 16px;
    font-family: "Press Start 2P";
  }
  p {
    text-align: center;
    font-size: 14px;
    line-height: 150%;
    word-break: keep-all;
  }
  img {
    width: 80px;
  }
`;
