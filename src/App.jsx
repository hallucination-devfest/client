import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle.js";
import { theme } from "./styles/theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage.jsx";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
