import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Home/Tweets/Tweets";
// import NotFound from "./components/NotFound/NotFound";
import GlobalStyle from "./globalStyles";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
