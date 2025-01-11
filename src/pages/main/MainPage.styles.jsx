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
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬을 위해 추가
  position: absolute;
  width: 120%;
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
