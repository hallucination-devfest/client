import React from "react";
import * as S from "./GameMainPage.styles";

import AgentProfile from "../../components/common/AgentProfile/AgentProfile";

function GameMainPage() {
  return (
    <>
      <S.Container>
        <S.TopLayout>
          <S.Title>Round 1</S.Title>
          <S.Subtitle>카테고리: 장소</S.Subtitle>
        </S.TopLayout>
        <S.Description>
          모든 캐릭터의 소개를 듣고 누가 거짓말을 하고 있는 <br />
          라이전트인지 맞혀보세요!
        </S.Description>
        <S.GridLayout>
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
          <AgentProfile agentName={"MARK"} imgSrc="/agents/Mark.png" />
        </S.GridLayout>
        <S.BottomLayout>채팅 횟수: 3회</S.BottomLayout>
      </S.Container>
    </>
  );
}

export default GameMainPage;
