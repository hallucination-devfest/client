import React, { useState, useRef, useEffect } from "react";
import * as S from "./ChattingPage.styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { decreaseRemainingChats } from "../../redux/gameSlice";
import AgentMiniProfile from "../../components/common/AgentProfile/AgentMiniProfile";

const API_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

function ChattingPage() {
  const location = useLocation();
  const agentName = location.state?.agentName;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chattingSpaceRef = useRef(null);

  const agents = useSelector((state) => state.game.agents);
  const currentRound = useSelector((state) => state.game.currentRound);
  const category = useSelector((state) => state.game.category);
  const remainingChats = useSelector((state) => state.game.remainingChats);
  const roomId = useSelector((state) => state.game.roomId);

  const specificAgent = agents.find((agent) => agent.name === agentName);

  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const characterList = [
    { characterId: 1, characterName: "MARK" },
    { characterId: 2, characterName: "CHLOE" },
    { characterId: 3, characterName: "AIDEN" },
    { characterId: 4, characterName: "ACE" },
    { characterId: 5, characterName: "ANDEW" },
    { characterId: 6, characterName: "CINDY" },
    { characterId: 7, characterName: "ALEX" },
    { characterId: 8, characterName: "JACE" },
  ];

  const characterData = characterList.find(
    (character) => character.characterName === agentName
  );

  useEffect(() => {
    chattingSpaceRef.current.scrollTop = chattingSpaceRef.current.scrollHeight;
  }, [chatHistory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.error("AccessToken이 없습니다.");
          return;
        }

        const response = await axios.get(
          `${API_URL}/rooms/${roomId}/interview/${characterData.characterId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("GET 요청 결과:", response.data);

        const { isEmpty, chatHistoryList } = response.data.data;

        if (!isEmpty && Array.isArray(chatHistoryList)) {
          const formattedChatHistory = chatHistoryList
            .map((chat) => [
              { type: "user", message: chat.question },
              { type: "ai", message: chat.answer },
            ])
            .flat();

          setChatHistory(formattedChatHistory);
        }
      } catch (error) {
        console.error("GET 요청 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [roomId, characterData?.characterId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) {
      return;
    }

    if (remainingChats <= 0) {
      alert("남은 채팅 횟수가 없습니다.");
      return;
    }

    try {
      if (!roomId) {
        console.error("해당 agentName에 맞는 roomId가 없습니다.");
        return;
      }

      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        console.error("AccessToken이 없습니다.");
        return;
      }

      setIsLoading(true);
      dispatch(decreaseRemainingChats());

      // 사용자 메시지를 즉시 표시
      const userMessage = userInput;
      setUserInput(""); // 입력창 초기화
      setChatHistory((prev) => [
        ...prev,
        { type: "user", message: userMessage },
      ]);

      const response = await axios.post(
        "https://proma-ai.store/ligent/interview",
        {
          roomId: roomId,
          characterId: characterData.characterId,
          question: userMessage,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const aiResponse = response.data.responseDto.answer || "응답 없음";
      setChatHistory((prev) => [...prev, { type: "ai", message: aiResponse }]);
    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
      alert("메시지 전송에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <S.Container>
      <S.TopLayout>
        <S.Title>Round {currentRound}</S.Title>
        <S.Subtitle>카테고리: {category}</S.Subtitle>
      </S.TopLayout>
      <S.TopBar>
        <S.TopBarBack onClick={handleBack}>&lt;</S.TopBarBack>
        <S.TopBarTitle>Chatting</S.TopBarTitle>
      </S.TopBar>
      <S.CharacterSpace>
        {specificAgent && (
          <AgentMiniProfile
            key={specificAgent.id}
            agentName={specificAgent.name}
            imgSrc={specificAgent.image}
          />
        )}
      </S.CharacterSpace>

      <S.ChattingSpace ref={chattingSpaceRef}>
        {chatHistory.map((chat, index) =>
          chat.type === "user" ? (
            <S.MyChat key={index}>{chat.message}</S.MyChat>
          ) : (
            <S.AIChat key={index}>{chat.message}</S.AIChat>
          )
        )}
      </S.ChattingSpace>

      <S.TextInputSpace>
        <S.BottomLayout>채팅 횟수: {remainingChats}회</S.BottomLayout>

        <S.TextInputBox>
          <S.TextInput
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleInputKeyPress}
            placeholder={
              isLoading ? "응답을 기다리는 중..." : "캐릭터에게 질문하세요!"
            }
            disabled={isLoading || remainingChats <= 0}
          />
          <S.SendImage
            src="../../../public/submit.png"
            alt="Send Image"
            onClick={handleSendMessage}
            style={{
              opacity: isLoading || remainingChats <= 0 ? 0.5 : 1,
              cursor:
                isLoading || remainingChats <= 0 ? "not-allowed" : "pointer",
            }}
          />
        </S.TextInputBox>
      </S.TextInputSpace>
    </S.Container>
  );
}

export default ChattingPage;
