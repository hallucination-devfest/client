import React, { useState, useRef, useEffect } from "react";
import * as S from "./ChattingPage.styles";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";

const API_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

function ChattingPage() {
    const location = useLocation();
    const agentName = location.state?.agentName;
    const navigate = useNavigate();
    const chattingSpaceRef = useRef(null);

    const agents = useSelector((state) => state.game.agents);
    const currentRound = useSelector((state) => state.game.currentRound);
    const category = useSelector((state) => state.game.category);
    const remainingChats = useSelector((state) => state.game.remainingChats);

    const specificAgent = agents.find((agent) => agent.name === agentName);

    const [userInput, setUserInput] = useState(""); 
    const [chatHistory, setChatHistory] = useState([]); // 채팅 내용을 저장하는 상태

    const roomId = useSelector((state) => state.game.roomId);
    // const roomId = 9;

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
                    const formattedChatHistory = chatHistoryList.map((chat) => [
                        { type: "user", message: chat.question },
                        { type: "ai", message: chat.answer },
                    ]).flat(); // 채팅을 병합
    
                    setChatHistory(formattedChatHistory); // 채팅 내용을 상태에 저장
                }
            } catch (error) {
                console.error("GET 요청 중 오류 발생:", error);
            }
        };
    
        fetchData();
    }, []);

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

    const handleBack = () => {
        navigate(-1);
    };

    const handleSendMessage = async () => {
        if (!userInput.trim()) {
            return; // 입력값이 없으면 아무 작업도 하지 않음
        }

        console.log(roomId);
        console.log(characterData.characterId);
        console.log(userInput);
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

            const response = await axios.post(
                "https://proma-ai.store/ligent/interview",
                {
                    roomId: roomId, 
                    characterId: characterData.characterId,
                    question: userInput,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, 
                    },
                }
            );

            console.log("서버 응답:", response.data);

            const aiResponse = response.data.responseDto.answer || "응답 없음";

            setChatHistory((prev) => [
                ...prev,
                { type: "user", message: userInput },
                { type: "ai", message: aiResponse },
            ]);

            setUserInput(""); // 입력창 초기화
        } catch (error) {
            console.error("POST 요청 중 오류 발생:", error);
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
                <AgentProfile
                    key={specificAgent.id}
                    agentName={specificAgent.name}
                    imgSrc={specificAgent.image}
                    disableClickMessage={true}
                />
                )}
            </S.CharacterSpace>
            <S.ChattingSpace ref={chattingSpaceRef}>
                {chatHistory.map((chat, index) => (
                    chat.type === "user" ? (
                        <S.MyChat key={index}>{chat.message}</S.MyChat>
                    ) : (
                        <S.AIChat key={index}>{chat.message}</S.AIChat>
                    )
                ))}
            </S.ChattingSpace>

            <S.TextInputSpace>
                <S.BottomLayout>채팅 횟수: {remainingChats}회</S.BottomLayout>

                <S.TextInputBox>
                    <S.TextInput
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} 
                        placeholder=" 캐릭터에게 질문하세요!"
                    />
                    <S.SendImage
                        src="../../../public/submit.png"
                        alt="Send Image"
                        onClick={handleSendMessage} 
                    />
                </S.TextInputBox>
            </S.TextInputSpace>
        </S.Container>
    );
}

export default ChattingPage;
