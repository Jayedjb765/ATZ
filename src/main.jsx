import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Addnewtask from './Components/Addnewtask/Addnewtask';
import Edittask from './Components/Edittask/Edittask';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/adduser",
    element: <Addnewtask></Addnewtask>
  },
  {
    path: '/edit/:id',
    element: <Edittask></Edittask>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
