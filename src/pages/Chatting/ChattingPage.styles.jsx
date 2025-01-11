import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.indigo1};
  width: 100%;
  height: 100%;
  overflow-y: hidden;
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

export const TopBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TopBarTitle = styled.div`
  font-family: "Press Start 2P", cursive;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const TopBarBack = styled.div`
  font-family: "Press Start 2P", cursive;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  position: absolute;
  left: 40px;
`;

export const CharacterSpace = styled.div`
  width: 100%;
  height: 180px;
  background-color: "yellow";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharacterName = styled.div`
  font-family: "Press Start 2P", cursive;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: 10px;
`;

export const ChattingSpace = styled.div`
  width: 100%;
  flex-grow: 1; /* 남은 공간을 채움 */
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: auto;
`;

export const MyChat = styled.div`
  max-width: 80%;
  background-color: black;
  border-radius: 15px;
  color: white;
  font-size: 15px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  margin-left: auto;
  line-height: 1.6;
`;

export const AIChat = styled.div`
  max-width: 80%;
  background-color: white;
  border-radius: 15px;
  color: black;
  font-size: 15px;
  align-items: start;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  line-height: 1.5;
`;

export const BottemSpace = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
`;

export const TextInputSpace = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.indigo1};
  padding-top: 20px;
`;

export const BottomLayout = styled.div`
  font-family: "NeoDunggeunmo", cursive;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 30px;
  display: flex;
  position: absolute;
  bottom: 40px;
  left: 10px;
  font-size: 14px;
`;

export const TextInputBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  padding: 20px;
`;

export const TextInput = styled.input`
  width: 85%;
  height: 40px;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  outline: none;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.chatting};
  color: white;

  &:focus {
    //border-color: #007BFF; /* 포커스 시 테두리 색 변경 */
    //box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3); /* 포커스 시 그림자 강조 */
  }

  &::placeholder {
    color: #fff;
    font-size: 14px;
  }
`;

export const SendImage = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
`;
