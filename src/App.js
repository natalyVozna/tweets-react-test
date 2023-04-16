import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import GlobalStyle from "./globalStyles";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const location = useLocation();
  console.log(location, "location");
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
