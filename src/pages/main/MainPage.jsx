import React from "react";
import * as S from "./MainPage.styles";

import KakaoButton from "../../components/common/KakaoButton/KakaoButton";

function MainPage() {
  return (
    <S.Container>
      <S.Subtitle>거짓말 하고 있는 라이전트를 잡아라!</S.Subtitle>
      <S.Main>
        LIEGENT
        <br />
        GAME
      </S.Main>
      <KakaoButton />
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
