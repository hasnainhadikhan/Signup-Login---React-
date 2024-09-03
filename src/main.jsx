import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Signup from './Signup';
import Login from './login';
import NotFound from './NotFound';
import './index.css';

// Define your routes here
const router = createBrowserRouter([
    { path: "/", element: <Login /> },  // Note: Changed "index" to "/"
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },  
    { path:"app", element:<App/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
