import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  object-fit: contain;
  > img {
    width: 100%;
    height: 100%;
  }
`;
export const NameContainer = styled.div`
  padding-top: 10px;
  color: #fff;
  text-align: center;
  font-family: "NeoDunggeunmo", cursive;
  letter-spacing: 0.2em;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
`;
