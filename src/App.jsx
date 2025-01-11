import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
