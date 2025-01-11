/* eslint-disable react/prop-types */
import * as S from "./AgentProfile.styles";
export default function AgentMiniProfile({
  imgSrc,
  agentName,
  color = "white",
}) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={imgSrc} alt="img" />
      </S.ImageContainer>
      <S.NameContainer $color={color}>{agentName}</S.NameContainer>
    </S.Container>
  );
}
