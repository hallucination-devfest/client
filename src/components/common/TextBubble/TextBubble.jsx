/* eslint-disable react/prop-types */
import * as S from "./TextBubble.styles";

export default function TextBubble({ content }) {
  return (
    <S.Container>
      <S.Text>{content}</S.Text>
    </S.Container>
  );
}
