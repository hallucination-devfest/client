import axios from "axios";
import { applyInterceptors } from "./interceptor";

// .env로 숨긴 URL 주소
// eslint-disable-next-line no-undef
const BASE_URL = import.meta.env.VITE_BACKEND_SERVER_URL;

// Axios 기본 인스턴스
const defaultInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Refresh 토큰 처리를 위한 옵션
});

// 추가 API 인스턴스
const createInstance = (baseInstance, path) => {
  const instance = axios.create(baseInstance.defaults);
  instance.defaults.baseURL += path;
  return instance;
};

const roomsInstance = createInstance(defaultInstance, "/rooms");
applyInterceptors(roomsInstance);

export { defaultInstance, roomsInstance };
