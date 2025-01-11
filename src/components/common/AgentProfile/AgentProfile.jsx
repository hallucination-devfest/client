/* eslint-disable react/prop-types */
import * as S from "./AgentProfile.styles";

export default function AgentProfile({
  imgSrc,
  agentName,
  color = "white",
  onClick,
}) {
  return (
    <S.Container onClick={onClick}>
      <S.ImageContainer>
        <img src={imgSrc} />
      </S.ImageContainer>
      <S.NameContainer $color={color}>{agentName}</S.NameContainer>
    </S.Container>
  );
}
