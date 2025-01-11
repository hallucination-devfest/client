import React, { useEffect, useState } from "react";
import * as S from "./MainPage.styles";
import KakaoButton from "../../components/common/KakaoButton/KakaoButton";
import GameStartButton from "../../components/main/GameStartButton";
function MainPage() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const loginStatus = localStorage.getItem("isLogin") === "true";
      setIsLogin(loginStatus);
    };

    // 'storage' 이벤트 리스너 등록
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // 이벤트 리스너 해제
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <S.Container>
      <S.Subtitle>거짓말 하고 있는 라이전트를 잡아라!</S.Subtitle>
      <S.Main>
        LIEGENT
        <br />
        GAME
      </S.Main>
      {isLogin ? <GameStartButton /> : <KakaoButton />}
      <S.TextBubbleImage $left={20} $top={140}>
        <img src="/MainPage_left_text_bubble.png" />
      </S.TextBubbleImage>
      <S.TextBubbleImage $right={16} $top={60}>
        <img src="/MainPage_right_text_bubble.png" />
      </S.TextBubbleImage>
      <S.BackImage>
        <img src="/MainPage_group_of_people.png" />
      </S.BackImage>
    </S.Container>
  );
}

export default MainPage;
