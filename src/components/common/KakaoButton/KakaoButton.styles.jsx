import styled from "styled-components";

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.kakao2};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.016px;
`;

export const Logo = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 14px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.kakao1};
  width: 335px;
  height: 52px;
  padding: 12px 14px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
