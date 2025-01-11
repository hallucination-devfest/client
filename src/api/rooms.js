import { sendRequest } from "./request";
import { aiInstance } from "./instance";

export const createRoom = async () => {
  try {
    const response = await sendRequest(aiInstance, "post", "/rooms");

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
