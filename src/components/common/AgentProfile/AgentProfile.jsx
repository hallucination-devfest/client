/* eslint-disable react/prop-types */
import * as S from "./AgentProfile.styles";

export default function AgentProfile({ imgSrc, agentName }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={imgSrc} />
      </S.ImageContainer>
      <S.NameContainer>{agentName}</S.NameContainer>
    </S.Container>
  );
}
