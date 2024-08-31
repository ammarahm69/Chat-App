import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import NotFound from './component/Notfound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    errorElement: <NotFound />, // Handle 404 errors here
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
