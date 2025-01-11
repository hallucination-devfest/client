import { sendRequest } from "./request";
import { roomsInstance } from "./instance";
import {
  resetGame,
  updateRoomId,
  updateCurrentRound,
  updateCurrentCategory,
  setRemainingChats,
} from "../redux/gameSlice";

export const createRoom = () => async (dispatch) => {
  try {
    const response = await sendRequest(roomsInstance, "post", "");
    if (!response.data.success) {
      return { success: "false" };
    }

    const roomId = response.data.data.roomId;
    const roundId = response.data.data.round;
    const category = response.data.data.category;
    const remainingChats = response.data.data.chatCount;
    // Redux 상태 업데이트
    dispatch(resetGame());
    dispatch(updateRoomId({ message: roomId }));
    dispatch(updateCurrentRound({ message: roundId }));
    dispatch(updateCurrentCategory({ message: category }));
    dispatch(setRemainingChats({ message: remainingChats }));

    return { success: true };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { success: false };
  }
};
