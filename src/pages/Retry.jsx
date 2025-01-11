import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

function Retry() {
    const navigate = useNavigate();

  useEffect(() => {
    const sendPatchRequest = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.error("AccessToken이 없습니다.");
          return;
        }

        const response = await axios.patch(
          `${API_URL}/users`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, 
              "Content-Type": "application/json",
            },
          }
        );

        console.log("PATCH 요청 성공:", response.data);
        navigate("/");
      } catch (error) {
        console.error("PATCH 요청 실패:", error);
      }
    };

    sendPatchRequest();
  }, []);

  return <></>;
}

export default Retry;
