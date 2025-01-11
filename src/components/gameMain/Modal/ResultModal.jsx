import React from "react";
import * as S from "./ResultModal.styles";
import Modal from "../../common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import AgentProfile from "../../common/AgentProfile/AgentProfile";

function ResultModal({ modalState, setModalState, result, name }) {
  const navigate = useNavigate();
  let title;
  let handleNext;
  let stamp;

  if (result === "success") {
    title = "YOU WIN!";
    handleNext = () => {
      setModalState(false);
      navigate("/game");
    };
    stamp = "/censoredStamp.png";
  } else if (result === "failed") {
    title = "YOU LOSE!";
    handleNext = () => {
      navigate("/");
    };
    stamp = "/failedStamp.png";
  }

  const Content = () => {
    return (
      <S.Content>
        <S.Stamp src={stamp} alt="stamp" />
        <AgentProfile
          imgSrc={`/agents/${name}.png`}
          agentName={name}
          color="black"
        />
        {result === "success" && (
          <p>
            라이전트 검거를 성공하셨습니다! <br />
            다음 라운드를 도전하세요!
          </p>
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
  return (
    <>
      {modalState && (
        <Modal
          title={title}
          type="result"
          handleNext={handleNext}
          onClose={() => setModalState(false)}
          content={<Content />}
        />
      )}
    </>
  );
}

export default ResultModal;
