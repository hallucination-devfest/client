import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import handleSocialAuth from "../../util/handleSocialLoginAuth";
import styles from "./socialLoginPageAfter.module.css";
function SocialLoginPageAfter() {
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    console.log("Search Params:", code.toString());

    handleSocialAuth(code.toString());
  }, []);

  return (
    <div className={styles.container}>
      <h2> 로그인 처리 중...</h2>
      <p>잠시만 기다려 주세요. 곧 리디렉션됩니다.</p>
    </div>
  );
}

export default SocialLoginPageAfter;
