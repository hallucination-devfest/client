import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle.js";
import { theme } from "./styles/theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import MainPage from "./pages/main/MainPage.jsx";
import GameMainPage from "./pages/GameMain/GameMainPage.jsx";
import ChattingPage from "./pages/Chatting/ChattingPage.jsx";
import SocialLoginPageAfter from "./pages/Login/socialLoginPageAfter.jsx";
import Retry from "./pages/Retry.jsx";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/game" element={<GameMainPage />} />
              <Route path="/chatting" element={<ChattingPage />} />
              <Route
                path="/auth/user/kakao"
                element={<SocialLoginPageAfter />}
              />
              <Route path="/retry" element={<Retry />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
