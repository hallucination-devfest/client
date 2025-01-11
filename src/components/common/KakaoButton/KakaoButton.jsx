import * as S from "./KakaoButton.styles";

export default function KakaoButton() {
  return (
    <S.Container>
      <S.Logo>
        <img src="/KakaoTalk_logo.svg" />
      </S.Logo>
      <S.Text>카카오톡으로 시작하기</S.Text>
    </S.Container>
  );
}
