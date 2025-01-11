import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [
    {
      id: 1,
      name: "ACE",
      image: "/agents/ACE.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 2,
      name: "AIDEN",
      image: "/agents/AIDEN.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 3,
      name: "ALEX",
      image: "/agents/ALEX.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 4,
      name: "ANDEW",
      image: "/agents/ANDEW.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 5,
      name: "CHLOE",
      image: "/agents/CHLOE.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 6,
      name: "CINDY",
      image: "/agents/CINDY.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 7,
      name: "JACE",
      image: "/agents/JACE.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
    {
      id: 8,
      name: "MARK",
      image: "/agents/Mark.png",
      currentChat: "",
      isLiar: false,
      zIndex: 1,
    },
  ],
  remainingChats: 3,
  currentRound: 1,
  category: "장소",
  maxZIndex: 1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateChat: (state, action) => {
      const { agentId, message } = action.payload;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.currentChat = message;
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
    clearChat: (state, action) => {
      const { agentId } = action.payload;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.currentChat = "";
      }
    },
    updateZIndex: (state, action) => {
      const { agentId } = action.payload;
      state.maxZIndex += 1;
      const agent = state.agents.find((a) => a.id === agentId);
      if (agent) {
        agent.zIndex = state.maxZIndex;
      }
    },
  },
});

export const {
  updateChat,
  decreaseRemainingChats,
  setLiarAgent,
  resetGame,
  updateAgentInfo,
  clearChat,
  updateZIndex,
} = gameSlice.actions;

export default gameSlice.reducer;
