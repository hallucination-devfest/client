import * as S from "./KakaoButton.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function KakaoButton() {
  const defaultURL = import.meta.env.VITE_BACKEND_SERVER_URL;
  const navigate = useNavigate();
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "SOCIAL_LOGIN_SUCCESS") {
        // 토큰 저장
        localStorage.setItem("accessToken", event.data.data.accessToken);
        localStorage.setItem("refreshToken", event.data.data.refreshToken);
        localStorage.setItem("isLogin", "true");
        window.dispatchEvent(new Event("storage"));
      } else if (event.data.type === "SOCIAL_LOGIN_ERROR") {
        console.error("소셜 로그인 실패:", event.data.error);
        console.log(event.data);
        // 에러 처리 (예: 사용자에게 에러 메시지 표시)
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  const handleKakaoLogin = async () => {
    const width = 300;
    const height = 400;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      `${defaultURL}/oauth/login/kakao`,
      "SocialLogin",
      `width=${width},height=${height},left=${left},top=${top}`
    );
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
