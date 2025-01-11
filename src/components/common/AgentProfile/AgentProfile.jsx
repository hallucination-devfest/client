/* eslint-disable react/prop-types */
import * as S from "./AgentProfile.styles";
import TextBubble from "../TextBubble/TextBubble";

export default function AgentProfile({
  imgSrc,
  agentName,
  currentChat,
  agentIdx,
  onClick,
  zIndex,
}) {
  return (
    <S.Container onClick={onClick}>
      <S.ImageContainer>
        <img src={imgSrc} alt="img" />
      </S.ImageContainer>
      <S.NameContainer>{agentName}</S.NameContainer>
      {currentChat && (
        <TextBubble content={currentChat} agentIdx={agentIdx} zIndex={zIndex} />
      )}
    </S.Container>
  );
}
