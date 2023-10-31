import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";

const login_storage_key = "bgr_login";

export const authService = {
    isAuthenticated: localStorage.getItem(login_storage_key) ? true : false,
    user: localStorage.getItem(login_storage_key) ? JSON.parse(localStorage.getItem(login_storage_key)) : {},

    authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },

    signOut(cb) {
        this.isAuthenticated = false;
        // Clear the authentication status and user information from local storage
        localStorage.removeItem(login_storage_key);
        this.user = {};
        setTimeout(cb, 100);
    }
};









// Initialize user information from local storage
// const storedUser = JSON.parse(localStorage.getItem(login_storage_key));
// if (storedUser) {
//     setUser(storedUser);
// }


//const isAuthenticated=localStorage.getItem(login_storage_key) ? true : false;

//const [user, setUser] = isAuthenticated ? useState(JSON.parse(localStorage.getItem(login_storage_key))):useState({});
// const authenticated = (user, cb) => {
//     // Update the user state with the authenticated user
//     setUser(user);
//     isAuthenticated = true;
//     // Store authentication status and user information in local storage
//     localStorage.setItem(login_storage_key, JSON.stringify(user));
//     setTimeout(cb, 100);
// };



// return {
//     user,
//     isAuthenticated,
//     //authenticated,
//     signOut,
// };




export const AuthRoute = ({ component: Component, ...rest }) => {
    const authService = authService();

    return (
        <Route
            {...rest}
            render={(props) =>
                authService.isAuthenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};
