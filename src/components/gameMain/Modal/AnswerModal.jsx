import React from "react";
import Modal from "../../common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../../../api/rooms";
import { useDispatch, useSelector } from "react-redux";

const AnswerModal = ({ isCorrect, modalState, setModalState }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentRound = useSelector((state) => state.game.currentRound);

  const handleConfirm = async () => {
    if (isCorrect) {
      // 현재 라운드가 3라운드이면 게임 종료
      if (currentRound === 3) {
        navigate("/"); // 또는 게임 종료 페이지로 이동
      } else {
        await dispatch(createRoom());
        navigate("/game");
      }
    } else {
      navigate("/");
    }
    setModalState(false);
  };

  const getModalTitle = () => {
    if (!isCorrect) {
      return "틀렸습니다! 다음 기회에 도전하세요!";
    }

    // 3라운드 통과 시 축하 메시지
    if (currentRound === 3) {
      return "축하합니다! hallucination 부스에 통과 화면을 들고 방문하여 상품을 수령해 주세요! 🎉";
    }

    return "정답입니다! 다음 라운드로 넘어갑니다!";
  };

  return (
    <>
      {modalState && (
        <Modal title={getModalTitle()} type="basic" onClose={handleConfirm} />
      )}
    </>
  );
};

export default AnswerModal;
