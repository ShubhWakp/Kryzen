import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tabler.min.css'
import reportWebVitals from './reportWebVitals';
import Pricewatcher from './Pages/Pricewatcher';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';

import Home from './Pages/Home';
import Pricewatcher1 from './Pages/Pricewatcher1';



const router = createBrowserRouter ([
  

  {
    path:'/',
    element:<Home/>,
    
  },

  {
    path:'/pricewatcher',
    element:<Pricewatcher/>
  },

  {
    path:'/pricewatcher1',
    element: <Pricewatcher1/>
  }

])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();