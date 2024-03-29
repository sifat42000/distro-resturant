import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home/Home.jsx';
import Root from './Root/Root.jsx';

const router = createBrowserRouter([
  {
   
        path: "/",
       element: <Root></Root>,
       children:[
        {
          path: "/",
          element: <Home></Home>,
        }
       ]
      
    
  },
]);

// ReactDOM.render(
//      <React.StrictMode>
//       <RouterProvider router={router}></RouterProvider>
//      </React.StrictMode>,
    
//      document.getElementById('root')
//      )


 ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl'>
    <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>,
  </div>
 ) 




