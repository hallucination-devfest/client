import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%; // 에이전트 프로필 위에 위치
  left: 50%; // 중앙 정렬 시작점
  transform: translateX(-50%); // 중앙 정렬 완성
  width: 240px;
  height: 140px;
  background-image: url("/text_bubble.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 999; // 다른 요소들 위에 보이도록
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  color: black;
  padding: 20px 30px; // 텍스트 패딩 추가
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  transform: translateY(10px);
`;
