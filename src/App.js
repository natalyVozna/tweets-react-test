import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';
import GlobalStyle from './globalStyles';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: '/tweets',
      element: <Tweets />,
      errorElement: <NotFound />,
    },
  ],
  {
    basename: '/tweets-react-test',
  }
);

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/tweets" element={<Tweets />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
