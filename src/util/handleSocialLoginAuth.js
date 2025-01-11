import { sendRequest } from "../api/request";
import { defaultInstance } from "../api/instance";

const handleSocialAuth = async (code) => {
  try {
    if (!code) {
      throw new Error("인증 코드를 찾을 수 없습니다.");
    }
    console.log("Extracted code:", code);

    const response = await sendRequest(
      defaultInstance,
      "post",
      `/oauth/social/kakao?code=${code}`
    );

    if (response.data.success) {
      // 원래 창으로 메시지 전송
      if (window.opener) {
        window.opener.postMessage(
          {
            type: "SOCIAL_LOGIN_SUCCESS",
            data: {
              accessToken: response.data.data.jwtTokenDto.accessToken,
              refreshToken: response.data.data.jwtTokenDto.refreshToken,
            },
          },
          "*"
        );
        // 현재 창 닫기
        window.close();
      } else {
        console.error("opener window not found");
      }
    } else {
      throw new Error("서버 응답 오류");
    }
  } catch (error) {
    console.error(`인증 처리 중 오류 발생:`, error);
    if (window.opener) {
      window.opener.postMessage(
        {
          type: "SOCIAL_LOGIN_ERROR",
          error: error.message,
        },
        "*"
      );
      // window.close();
    }
  }
};

export default handleSocialAuth;
