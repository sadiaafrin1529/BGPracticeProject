import { Route, createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Login from "../Login";
import TodoItems from "../TodoItems";
import Registar from "../Registar";
import Contact from "../Contact";
import Dashboard from "../Dashboard/Dashboard";
import { Component } from "react";
import { AuthRoute } from "../Auth/AuthGuard";


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
        exact: true,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        auth: true,

    }


])
export class RouteBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.prepareRoutes(),
        };
    }
    prepareRoutes = () => {
        let body = AppRoutes.routes.map((routesInfo, index) => {
            
            if (routesInfo.hasOwnProperty('auth') && routesInfo.auth === true) {
                console.log(routesInfo)
                return (
                    <AuthRoute
                        key={index}
                        path={routesInfo.path}
                        component={routesInfo.component}
                    />
                );
                
            }
             else {
                return (
                    <Route
                        key={index}
                        path={routesInfo.path}
                        component={routesInfo.component}
                        exact
                    />
                );
            }
        });
        return body;
    };
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>{this.state.body}</Switch>
                </BrowserRouter>
            </div>
        );
    }
}


export default router;