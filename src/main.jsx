import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstApp from './component/FirstApp.jsx';
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstApp></FirstApp>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"addcoffee",
    element:<AddCoffee></AddCoffee>    
  },
  {
    path:"updatecoffee",
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
