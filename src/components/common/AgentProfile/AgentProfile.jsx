/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as S from "./AgentProfile.styles";
import TextBubble from "../TextBubble/TextBubble";

export default function AgentProfile({
  imgSrc,
  agentName,
  color = "white",
  currentChat,
  agentIdx,
  onClick,
  zIndex,
  disableClickMessage = false, 
}) {
  const [hasClicked, setHasClicked] = useState(disableClickMessage);

  const handleClick = () => {
    if (!disableClickMessage) { 
      setHasClicked(true);
    }
    if (onClick) onClick();
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ImageContainer>
        <img src={imgSrc} alt="img" />
      </S.ImageContainer>
      <S.NameContainer $color={color}>{agentName}</S.NameContainer>
      {!hasClicked && <S.ClickState>클릭해서 설명듣기</S.ClickState>}
      {currentChat && (
        <TextBubble content={currentChat} agentIdx={agentIdx} zIndex={zIndex} />
      )}
    </S.Container>
  );
}
