import React from "react";
import * as S from "./ResultModal.styles";
import Modal from "../../common/Modal/Modal";
import { useNavigate } from "react-router-dom";

const AnswerModal = ({ isCorrect, modalState, setModalState }) => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (isCorrect) {
      navigate("/game"); // 정답일 때 "/game"으로 이동
    } else {
      navigate("/"); // 오답일 때 "/"으로 이동
    }
    setModalState(false);
  };
  return (
    <>
      {modalState && (
        <Modal
          title={
            isCorrect === true
              ? "정답입니다! 다음 라운드로 넘어갑니다!"
              : "틀렸습니다! 다음 기회에 도전하세요!"
          }
          type="basic"
          onClose={handleConfirm}
        />
      )}
    </>
  );
};

export default AnswerModal;
