/* eslint-disable react/prop-types */
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
  const handleClick = () => {
    if (onClick) onClick();
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
