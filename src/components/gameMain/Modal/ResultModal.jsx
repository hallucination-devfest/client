import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./ResultModal.styles";
import Modal from "../../common/Modal/Modal";
import AnswerModal from "./AnswerModal";
import AgentMiniProfile from "../../common/AgentProfile/AgentMiniProfile";

const BACKEND_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

const Content = ({ result, name, inputValue, setInputValue }) => {
  return (
    <S.Content>
      <S.Stamp
        src={result === "success" ? "/censoredStamp.png" : "/failedStamp.png"}
        alt="stamp"
      />
      <AgentMiniProfile
        imgSrc={`/agents/${name}.png`}
        agentName={name}
        color="black"
      />
      {result === "success" && (
        <>
          <p>
            라이전트 검거를 성공하셨습니다! <br />
            다음 라운드를 도전하세요! 제시어를 맞히면 다음 라운드로 넘어갈 수
            있습니다!
          </p>
          <S.Input
            type="text"
            placeholder="제시어를 입력하세요!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </>
      )}
      {result === "failed" && (
        <p>
          라이전트 검거에 실패하였습니다. 재도전을 원할 경우, hallucination
          부스를 방문하여 QR 코드를 인식해주세요!
        </p>
      )}
    </S.Content>
  );
};

function ResultModal({ modalState, setModalState, result, name }) {
  const [inputValue, setInputValue] = useState("");
  const [answerModalState, setAnswerModalState] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const roomId = useSelector((state) => state.game.roomId);

  const checkAnswer = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(`${BACKEND_URL}/rooms/${roomId}/keyword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          keyword: inputValue.trim(),
        }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        setIsCorrect(responseData.data.isSuccess);
        setAnswerModalState(true);
      } else {
        console.error("Failed to check keyword:", responseData.error);
        setIsCorrect(false);
        setAnswerModalState(true);
      }
    } catch (error) {
      console.error("Error checking keyword:", error);
      setIsCorrect(false);
      setAnswerModalState(true);
    }
  };

  return (
    <>
      {modalState && (
        <Modal
          title={result === "success" ? "YOU WIN!" : "YOU LOSE!"}
          type="result"
          handleNext={checkAnswer}
          onClose={() => setModalState(false)}
          content={
            <Content
              result={result}
              name={name}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          }
        />
      )}
      <AnswerModal
        isCorrect={isCorrect}
        modalState={answerModalState}
        setModalState={(state) => {
          setAnswerModalState(state);
          setModalState(state);
        }}
      />
    </>
  );
}

export default ResultModal;
