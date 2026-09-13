import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/LandingPage";
import ChannelsPage from "./pages/ChannelsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chaines" element={<ChannelsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
