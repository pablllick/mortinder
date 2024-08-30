import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import Layout from './components/Layout';

function App(): JSX.Element {
  // const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
