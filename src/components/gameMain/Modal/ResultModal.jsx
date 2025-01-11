import React, { useState } from "react";
import * as S from "./ResultModal.styles";
import Modal from "../../common/Modal/Modal";
import AgentProfile from "../../common/AgentProfile/AgentProfile";
import AnswerModal from "./AnswerModal";

const Content = ({ result, name, inputValue, setInputValue }) => {
  console.log("hi");
  return (
    <S.Content>
      <S.Stamp
        src={result === "success" ? "/censoredStamp.png" : "/failedStamp.png"}
        alt="stamp"
      />
      <AgentProfile
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
  const [answerModalState, setAnswerModalState] = useState(false); // 정답/오답 모달 상태
  const [isCorrect, setIsCorrect] = useState(false); // 정답 여부
  const checkAnswer = () => {
    const correctAnswer = "정답"; // 정답 설정
    if (inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setAnswerModalState(true);
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
      {/* AnswerModal 연결 */}
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
