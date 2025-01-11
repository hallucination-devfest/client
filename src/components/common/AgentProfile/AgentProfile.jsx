/* eslint-disable react/prop-types */
import { useState } from "react";
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
  hasClicked,
}) {
  const [hasClicked, setHasClicked] = useState(disableClickMessage);
  const [showBubble, setShowBubble] = useState(false); // TextBubble 표시 상태

  const handleClick = () => {
    if (!disableClickMessage) {
      setHasClicked(true);
    }
    if (onClick) onClick();

    // TextBubble 표시 토글
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 3000); // 3초 후 사라짐
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ImageContainer>
        <img src={imgSrc} alt="img" />
      </S.ImageContainer>
      <S.NameContainer $color={color}>{agentName}</S.NameContainer>
      {!hasClicked ? (
        <S.ClickState>클릭해서 설명듣기</S.ClickState>
      ) : (
        <S.ClickState>&nbsp;</S.ClickState>
      )}
      {currentChat && (
        <TextBubble content={currentChat} agentIdx={agentIdx} zIndex={zIndex} />
      )}
    </S.Container>
  );
}
