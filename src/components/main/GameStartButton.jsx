import * as S from "./GameStartButton.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserName } from "../../api/user";
import { createRoom } from "../../api/rooms";
import { useDispatch } from "react-redux";
import Modal from "../common/Modal/Modal";
import { FailModal } from "./FailModal";

export default function GameStartButton() {
  const [modalState, setModalState] = useState(false);
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
    const response = await dispatch(createRoom());
    console.log("response", response);
    if (!response.success) {
      setModalState(true);
    } else {
      navigate("/game");
    }
  };

  return (
    <S.Container>
      <p>{username}님, 환영합니다!</p>
      <S.ButtonContainer onClick={handleClick}>게임 시작하기</S.ButtonContainer>
      {modalState && <FailModal setModalState={setModalState} />}
    </S.Container>
  );
}
