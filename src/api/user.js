import { sendRequest } from "./request";
import { userInstance } from "./instance";

export const fetchUserName = async () => {
  try {
    const response = await sendRequest(userInstance, "get", "");
    return response.data.data.username;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
