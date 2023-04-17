import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';
import NotFound from './components/NotFound/NotFound';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} errorElement={<NotFound />} />
        <Route
          path="/tweets"
          element={<Tweets />}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
