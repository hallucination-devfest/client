import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  ${({ $agentIdx }) =>
    $agentIdx % 2 === 0
      ? `
        left: 80%;
        transform: translateX(-50%);
      `
      : `
        right: 80%;
        transform: translateX(50%) scaleX(-1);
      `}
  width: 290px;
  height: 170px;
  background-image: url("/text_bubble.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: ${({ $zIndex }) => $zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  color: black;
  padding: 20px 30px;
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  transform: translateY(10px)
    ${({ $agentIdx }) => ($agentIdx % 2 !== 0 ? "scaleX(-1)" : "")};
`;
