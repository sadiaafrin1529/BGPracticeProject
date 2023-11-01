import { Route, createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Login from "../Login";
import TodoItems from "../TodoItems";
import Registar from "../Registar";
import Contact from "../Contact";
import Dashboard from "../Dashboard/Dashboard";
//import { Component } from "react";
//import { AuthRoute } from "../Auth/AuthGuard";
import PrivateRouter from "./PrivateRouter";
import RedirectPage from "./Pages/RedirectPage";
import About from "../About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "/todo",
                element: <TodoItems />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path:"/about",
                element:<About/>
            }

        ]
    },

    {
        path: '/login',
        element: <Login></Login>,
        exact: true,
    },
    {
        path: '/register',
        element: <Registar />,
        //exact: true,
    },
    {
        
            path: '/redirect',
            element: <RedirectPage />,
            exact: true,
          
    },
    {
        path: '/dashboard',
        element:<PrivateRouter><Dashboard /></PrivateRouter> ,
        //element:<PrivateRouter><Dashboard /></PrivateRouter> ,
        //auth: true,

    }
    // PrivateRouter

])



export default router;