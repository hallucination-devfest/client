/* eslint-disable react/prop-types */
import * as S from "./AgentProfile.styles";
import TextBubble from "../TextBubble/TextBubble";

export default function AgentProfile({ imgSrc, agentName, currentChat }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={imgSrc} />
      </S.ImageContainer>
      <S.NameContainer>{agentName}</S.NameContainer>
      {currentChat && <TextBubble content={currentChat} />}
    </S.Container>
  );
}
