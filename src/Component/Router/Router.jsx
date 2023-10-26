import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Login from "../Login";
import TodoItems from "../TodoItems";
import Registar from "../Registar";
import Contact from "../Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>

            },
            {
                path:"/todo",
                element:<TodoItems/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
           
        ]
    },
    
        {
            path:'/login',
            element:<Login></Login>
        },
   {
    path:'/register',
    element:<Registar/>
   }

])
export default router;