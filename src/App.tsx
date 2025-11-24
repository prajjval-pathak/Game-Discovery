import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GameDetailPage from "./Pages/GameDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games/:id" element={<GameDetailPage />} />
    </Routes>
  );
}

export default App;
