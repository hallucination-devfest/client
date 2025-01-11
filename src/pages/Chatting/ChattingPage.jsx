import React from "react";
import * as S from "./ChattingPage.styles";
import { useSelector } from "react-redux";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";

function ChattingPage() {
    const agents = useSelector((state) => state.game.agents);
    const currentRound = useSelector((state) => state.game.currentRound);
    const category = useSelector((state) => state.game.category);
    const remainingChats = useSelector((state) => state.game.remainingChats);

    const specificAgent = agents.find((agent) => agent.name === "MARK");

    return (
        <S.Container>
            <S.TopLayout>
                <S.Title>Round {currentRound}</S.Title>
                <S.Subtitle>카테고리: {category}</S.Subtitle>
            </S.TopLayout>
            <S.TopBar>
                <S.TopBarBack>&lt;</S.TopBarBack>
                <S.TopBarTitle>Chatting</S.TopBarTitle>
            </S.TopBar>
            <S.CharacterSpace>
                {specificAgent && (
                <AgentProfile
                    key={specificAgent.id}
                    agentName={specificAgent.name}
                    imgSrc={specificAgent.image}
                    disableClickMessage = {true}
                />
                )}
            </S.CharacterSpace>
            <S.ChattingSpace>
                <S.MyChat>여기에서 사람들이 주로 어떤 활동을 하지?</S.MyChat>
                <S.AIChat>이 장소에서는 사람들이 모두 즐거워 해. 다들 재미있게 웃고 있네.</S.AIChat>
            </S.ChattingSpace>

           
            <S.TextInputSpace>
                <S.BottomLayout>채팅 횟수: {remainingChats}회</S.BottomLayout>

                <S.TextInputBox>
                    <S.TextInput placeholder=" 캐릭터에게 질문하세요!" />
                    <S.SendImage src="../../../public/submit.png" alt="Send Image" />
                </S.TextInputBox>
                
            </S.TextInputSpace>
        </S.Container>
    );
}

export default ChattingPage;