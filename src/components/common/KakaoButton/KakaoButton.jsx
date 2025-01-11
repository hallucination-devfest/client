import * as S from "./KakaoButton.styles";
import { useNavigate } from "react-router-dom";

export default function KakaoButton() {
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    navigate("/game");
  };
  return (
    <S.Container onClick={handleKakaoLogin}>
      <S.Logo>
        <img src="/KakaoTalk_logo.svg" />
      </S.Logo>
      <S.Text>카카오톡으로 시작하기</S.Text>
    </S.Container>
  );
}
