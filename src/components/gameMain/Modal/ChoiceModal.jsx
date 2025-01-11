import React from "react";
import * as S from "./ChoiceModal.styles";
import Modal from "../../common/Modal/Modal";
import { useNavigate } from "react-router-dom";
import AgentMiniProfile from "../../common/AgentProfile/AgentMiniProfile";

function ChoiceModal({ modalState, setModalState, name, onPick }) {
  const navigate = useNavigate();
  const Content = () => {
    return (
      <S.Content>
        <AgentMiniProfile
          imgSrc={`/agents/${name}.png`}
          agentName={name}
          color="black"
        />
        <p>
          {name}를 선택하셨습니다. <br />
          {name}와 채팅 또는 지목하시겠습니까?
        </p>
      </S.Content>
    );
  };
  return (
    <>
      {modalState && (
        <Modal
          type="choice"
          onChat={() =>
            navigate("/chatting", {
              state: { agentName: name },
            })
          }
          onPick={onPick}
          onClose={() => setModalState(false)}
          content={<Content />}
        />
      )}
    </>
  );
}
// onChat, onPick 부분 수정
export default ChoiceModal;
