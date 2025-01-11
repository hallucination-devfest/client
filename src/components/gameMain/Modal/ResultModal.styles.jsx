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
