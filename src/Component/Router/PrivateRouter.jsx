import React from 'react';
import { authService } from '../Auth/AuthGuard';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  if (!authService.isAuthenticated) {
    // If the user is not authenticated, redirect to the RedirectPage
    return <Navigate to="/redirect" replace />;
  }

  return children;
};

export default PrivateRouter;



// import React, { Component } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { authService } from '../Auth/AuthGuard';

// const PrivateRouter = ({ component: Component, ...rest }) => {
//     return <Routes>
//          <Route render={(props)=>{
//         console.log(props.location)
//         if(authService.isAuthenticated){
//             return <Component {...props}/>
//         } else {
//             return <Navigate to={{
//                 pathname:"/login",
//                 state: {
//                     from: props.location
//                 }
//             }}/>
//         }
//     }}/>
//     </Routes>
   
// };

// export default PrivateRouter;
