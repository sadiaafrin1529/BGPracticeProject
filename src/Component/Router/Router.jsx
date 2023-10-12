import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Login from "../Login";
import Dashboard from "../Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>

            }
           
        ]
    },
    
        {
            path:'/login',
            element:<Login></Login>
        },
   

])
export default router;