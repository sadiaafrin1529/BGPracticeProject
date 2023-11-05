import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";

const login_storage_key = "bgr_login";
export const authService = {
    
    //isAuthenticated: false,
    isAuthenticated: (localStorage.getItem(login_storage_key) ? true : false),
    //user: localStorage.getItem(login_storage_key) ? JSON.parse(localStorage.getItem(login_storage_key)) : {},
    /*authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); 
        //console.log(localStorage.getItem(login_storage_key));  
    },*/
    getUser(cb) {
        if(this.isAuthenticated){
            return JSON.parse(localStorage.getItem(login_storage_key));
        }else return {};
        setTimeout(cb, 100);
    },
    setLogin(data,cb){
        this.isAuthenticated = true
        localStorage.setItem(login_storage_key, JSON.stringify(data));
        setTimeout(cb, 100); 
    },
    signOut(cb) {
        this.isAuthenticated = false;
        // Clear the authentication status and user information from local storage
        localStorage.removeItem(login_storage_key);
        //this.user = {};
        setTimeout(cb, 100);
    }
    
}; 



// import { Route, Navigate } from "react-router-dom";

// const login_storage_key = "bgr_login";

// export const authService = {
//   // Initialize isAuthenticated to false and user to an empty object
//   isAuthenticated: false,
//   user: {},

//   authenticated(user, cb) {
//     // Update isAuthenticated and user with the provided user data
//     this.isAuthenticated = true;
//     this.user = user;

//     // Store authentication status and user information in local storage
//     localStorage.setItem(login_storage_key, JSON.stringify(user));
//     setTimeout(cb, 100);
//   },

//   signOut(cb) {
//     // Clear the authentication status, user information, and local storage
//     this.isAuthenticated = false;
//     this.user = {};
//     localStorage.removeItem(login_storage_key);
//     setTimeout(cb, 100);
//   },
// };

// // Load user data from local storage if available when the application starts
// const storedUser = JSON.parse(localStorage.getItem(login_storage_key));
// if (storedUser) {
//   authService.isAuthenticated = true;
//   authService.user = storedUser;
// }









// // Initialize user information from local storage
// // const storedUser = JSON.parse(localStorage.getItem(login_storage_key));
// // if (storedUser) {
// //     setUser(storedUser);
// // }


 //const isAuthenticated=localStorage.getItem(login_storage_key) ? true : false;

 //const [user, setUser] = isAuthenticated ? useState(JSON.parse(localStorage.getItem(login_storage_key))):useState({});
 // const authenticated = (user, cb) => {
 //     // Update the user state with the authenticated user
// //     setUser(user);
// //     isAuthenticated = true;
// //     // Store authentication status and user information in local storage
// //     localStorage.setItem(login_storage_key, JSON.stringify(user));
// //     setTimeout(cb, 100);
// // };



// // return {
// //     user,
// //     isAuthenticated,
// //     //authenticated,
// //     signOut,
// // };




// export const AuthRoute = ({ component: Component, ...rest }) => {
//     const authService = authService();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 authService.isAuthenticated === true ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to="/login" />
//                 )
//             }
//         />
//     );
// };
