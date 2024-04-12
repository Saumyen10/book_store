import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
     {
        path: "/",      // this is the root(home) page (website will display this page when opened) 
        element: <Home/>
     }, 
     {
        path: "/about",      // this is the about page  
        element: <About/>
     }, 
     {
        path: "/blog",      // this is the blog page  
        element: <Blog/>
     }, 
    ]

  },
]);

export default router;