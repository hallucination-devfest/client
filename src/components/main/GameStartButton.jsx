import * as S from "./GameStartButton.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserName } from "../../api/user";
import { createRoom } from "../../api/rooms";
import { useDispatch } from "react-redux";

export default function GameStartButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    const fetchUserNameAPI = async () => {
      const fetchedUsername = await fetchUserName();
      setUsername(fetchedUsername);
      localStorage.setItem("username", fetchedUsername);
    };

    fetchUserNameAPI();

    // localStorage 변경 감지
    const handleStorageChange = () => {
      const updatedUsername = localStorage.getItem("username");
      if (updatedUsername) {
        setUsername(updatedUsername);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleClick = async () => {
    try {
      const response = await dispatch(createRoom());
      console.log("response:", response);
      navigate("/game");
    } catch (error) {
      console.error("Failed to create room:", error);
    }
  };

  return (
    <S.Container>
      <p>{username}님, 환영합니다!</p>
      <S.ButtonContainer onClick={handleClick}>게임 시작하기</S.ButtonContainer>
    </S.Container>
  );
}
