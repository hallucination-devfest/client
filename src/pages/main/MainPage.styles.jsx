import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.indigo1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
  line-height: 160%;
`;

export const Main = styled.h1`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 160%;
  font-family: "Press Start 2P", cursive;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.pale1};
`;

export const BackImage = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  > img {
    width: 100%;
  }
`;

export const TextBubbleImage = styled.div`
  position: absolute;
  left: ${(props) => props.$left + "px" || "none"};
  top: ${(props) => props.$top + "px" || "none"};
  right: ${(props) => props.$right + "px" || "none"};
`;
