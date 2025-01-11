import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [
    {
      id: 1,
      name: "ACE",
      image: "/agents/ACE.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 2,
      name: "AIDEN",
      image: "/agents/AIDEN.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 3,
      name: "ALEX",
      image: "/agents/ALEX.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 4,
      name: "ANDEW",
      image: "/agents/ANDEW.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 5,
      name: "CHLOE",
      image: "/agents/CHLOE.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 6,
      name: "CINDY",
      image: "/agents/CINDY.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 7,
      name: "JACE",
      image: "/agents/JACE.png",
      chattings: [],
      isLiar: false,
    },
    {
      id: 8,
      name: "MARK",
      image: "/agents/MARK.png",
      chattings: [],
      isLiar: false,
    },
  ],
  remainingChats: 3,
  currentRound: 1,
  category: "장소",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addChatting: (state, action) => {
      const { agentId, message } = action.payload;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.chattings.push(message);
      }
    },
    decreaseRemainingChats: (state) => {
      if (state.remainingChats > 0) {
        state.remainingChats -= 1;
      }
    },
    setLiarAgent: (state, action) => {
      const liarId = action.payload;
      state.agents = state.agents.map((agent) => ({
        ...agent,
        isLiar: agent.id === liarId,
      }));
    },
    resetGame: (state) => {
      return initialState;
    },
    updateAgentInfo: (state, action) => {
      const { agentId, name, image } = action.payload;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.name = name;
        agent.image = image;
      }
    },
    clearChattings: (state, action) => {
      const { agentId } = action.payload;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.chattings = [];
      }
    },
  },
});

export const {
  addChatting,
  decreaseRemainingChats,
  setLiarAgent,
  resetGame,
  updateAgentInfo,
  clearChattings,
} = gameSlice.actions;

export default gameSlice.reducer;
