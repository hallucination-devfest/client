/* eslint-disable react/prop-types */
import * as S from "./TextBubble.styles";

export default function TextBubble({ content, agentIdx, zIndex }) {
  return (
    <S.Container $agentIdx={agentIdx} $zIndex={zIndex}>
      <S.Text $agentIdx={agentIdx}>{content}</S.Text>
    </S.Container>
  );
}
