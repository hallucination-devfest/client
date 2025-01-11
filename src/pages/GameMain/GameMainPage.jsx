import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./GameMainPage.styles";
import InfoModal from "../../components/gameMain/Modal/InfoModal";
import GuideModal from "../../components/gameMain/Modal/GuideModal";
import ChoiceModal from "../../components/gameMain/Modal/ChoiceModal";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";
import ResultModal from "../../components/gameMain/Modal/ResultModal";
import {
  updateChat,
  clearChat,
  updateZIndex,
  updateHasClicked,
  updateAgentSelectionComplete,
} from "../../redux/gameSlice";

const API_URL = import.meta.env.VITE_AI_API_URL;
const BACKEND_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

function GameMainPage() {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.game.agents);
  const currentRound = useSelector((state) => state.game.currentRound);
  const category = useSelector((state) => state.game.category);
  const remainingChats = useSelector((state) => state.game.remainingChats);
  const agentSelectionComplete = useSelector(
    (state) => state.game.agentSelectionComplete
  );
  const roomId = useSelector((state) => state.game.roomId);

  const [infoModalState, setInfoModalState] = useState(true);
  const [choiceModalState, setChoiceModalState] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState("");
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [resultModalState, setResultModalState] = useState(false);
  const [guideModalState, setGuideModalState] = useState(false);
  const [selectionResult, setSelectionResult] = useState(null);

  const fetchAgentResponse = async (agentId) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId: roomId,
          characterId: agentId,
        }),
      });

      const data = await response.json();

      if (data.success) {
        return data.responseDto.chatContent;
      } else {
        console.error("API Error:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch agent response:", error);
      return null;
    }
  };

  const checkLiarSelection = async (lierId) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/rooms/${roomId}/lier/${lierId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to check liar selection");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to check liar selection:", error);
      return null;
    }
  };

  const agentPick = async () => {
    setChoiceModalState(false);

    if (selectedAgentId) {
      const result = await checkLiarSelection(selectedAgentId);
      setSelectionResult(result?.correct ?? false);
    } else {
      setSelectionResult(false);
    }

    setResultModalState(true);
  };

  const handleAgentClick = async (agentId) => {
    const agent = agents.find((agent) => agent.id === agentId);

    if (!agentSelectionComplete) {
      const clickedCount = agents.filter((a) => a.hasClicked).length + 1;
      if (agent?.hasClicked) {
        return;
      }

      dispatch(updateZIndex({ agentId }));
      dispatch(updateHasClicked({ agentId }));

      const chatContent = await fetchAgentResponse(agentId);
      if (chatContent) {
        dispatch(updateChat({ agentId, message: chatContent }));
      }

      setTimeout(() => {
        dispatch(clearChat({ agentId }));

        if (clickedCount === agents.length) {
          setGuideModalState(true);
          dispatch(updateAgentSelectionComplete({ completed: true }));
        }
      }, 3000);
    } else {
      setChoiceModalState(true);
      setSelectedAgentId(agentId);
      setSelectedAgentName(agents.find((agent) => agent.id === agentId)?.name);
    }
  };

  return (
    <>
      <S.Container>
        {infoModalState && (
          <InfoModal
            modalState={infoModalState}
            setModalState={setInfoModalState}
          />
        )}
        <S.TopLayout>
          <S.Title>Round {currentRound}</S.Title>
          <S.Subtitle>카테고리: {category}</S.Subtitle>
        </S.TopLayout>
        <S.Description>
          모든 캐릭터의 소개를 듣고 누가 거짓말을 하고 있는 <br />
          라이전트인지 맞혀보세요!
        </S.Description>
        <S.GridWrapper>
          <S.GridLayout>
            {agents.map((agent, idx) => (
              <AgentProfile
                key={agent.id}
                agentName={agent.name}
                imgSrc={agent.image}
                onClick={() => {
                  handleAgentClick(agent.id);
                  setSelectedAgentName(agent.name);
                }}
                currentChat={agent.currentChat}
                agentIdx={idx}
                zIndex={agent.zIndex}
                color="white"
                hasClicked={agent.hasClicked}
              />
            ))}
          </S.GridLayout>
        </S.GridWrapper>
        {choiceModalState && (
          <ChoiceModal
            modalState={choiceModalState}
            setModalState={setChoiceModalState}
            onPick={agentPick}
            name={selectedAgentName}
          />
        )}
        {resultModalState && (
          <ResultModal
            modalState={resultModalState}
            setModalState={setResultModalState}
            result={selectionResult ? "success" : "fail"}
            name={selectedAgentName}
          />
        )}
        {guideModalState && (
          <GuideModal
            modalState={guideModalState}
            setModalState={setGuideModalState}
          />
        )}

        <S.BottomLayout>
          <S.BottomContent>채팅 횟수: {remainingChats}회</S.BottomContent>
          <S.InfoIcon
            src="/infoIcon.svg"
            alt="info"
            onClick={() => setInfoModalState(true)}
          />
        </S.BottomLayout>
      </S.Container>
    </>
  );
}

export default GameMainPage;
