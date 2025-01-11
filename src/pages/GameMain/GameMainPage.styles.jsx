import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.indigo1};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const TopLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

export const Title = styled.div`
  font-family: "Press Start 2P", cursive;
  color: ${({ theme }) => theme.colors.pale1};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const Subtitle = styled.div`
  font-family: "NeoDunggeunmo", cursive;
  color: ${({ theme }) => theme.colors.pale1};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const Description = styled.div`
  padding: 8px 11px;

  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

export const GridWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
  flex: 1;
`;

export const GridLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: baseline;
  grid-template-columns: repeat(2, 1fr);
`;

export const BottomLayout = styled.div`
  font-family: "NeoDunggeunmo", cursive;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 30px;
`;
