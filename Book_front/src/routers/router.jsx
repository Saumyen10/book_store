import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../about/About";
import Blog from "../blog/Blog";
import SingleBook from "../components/SingleBook";
import Shop from "../shop/Shop";

// importing dashboard routes 
import Layout from "../dashboard/Layout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
     {
        path: "/shop",      // this is the shop page  
        element: <Shop/>
     }, 
     {
        path: "/books/:id",      // this is the single book page  
        element: <SingleBook/>,
        loader: ({params}) => fetch (`http://localhost:5000/books/${params.id}`)
     }, 

   

    ]

  },

   //dashboard
      {
         path: "/admin/dashboard",
         element: <Layout/>,
         children: [
            {
               path: "/admin/dashboard",  
               element: <Dashboard/>       //#everyone can access
              // element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
               path: "/admin/dashboard/upload",
               element: <UploadBook/>
            },
            {
               path: "/admin/dashboard/manage",
               element: <ManageBook/>
            },
            {
               path: "/admin/dashboard/edit/:id",
               element: <EditBook/>,
               loader: ({params}) => fetch (`http://localhost:5000/books/${params.id}`)
            },
         ]
      },
      //authenication
      {
         path: "signup",
         element: <SignUp/>
      },
      
      {
         //private routing
         path: "login",
         element: <LogIn/>
      },
      

]);

export default router;