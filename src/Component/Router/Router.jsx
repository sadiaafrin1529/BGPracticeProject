import { BrowserRouter, Route, Router, Routes, createBrowserRouter } from "react-router-dom";
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
import { createRoot } from "react-dom/client";


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
        //element:<Dashboard />,
        //auth: true,

    }
    // PrivateRouter

])

// const root = createRoot(document.getElementById("root"));
// root.render(
//     <BrowserRouter basename='/'>
//         <Routes>
//             <Route path="/" element={<Main />}></Route>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/login" element={<Login/>}></Route>
//             <Route path="/register" element={<Registar/>}></Route>
//            <Route path="/redirect" element={<RedirectPage/>}></Route>
//             <Route path="/dashboard" element={<PrivateRouter><Dashboard/></PrivateRouter>}></Route>
//         </Routes>
//     </BrowserRouter>
// )




export default router;