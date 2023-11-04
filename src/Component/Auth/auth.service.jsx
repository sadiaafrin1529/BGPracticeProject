import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const login_storage_key = "bgr_login";
    const [storedUser, setStoredUser] = useState(null);
    const [initialUser, setInitialUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setStoredUser(localStorage.getItem(login_storage_key));
        setInitialUser(storedUser ? JSON.parse(storedUser) : null);
        if (storedUser) {
            setIsAuthenticated(true);
        }
    }, [storedUser])




    console.log(initialUser)

    const [user, setUser] = useState(initialUser);
    const [loading,setLoading]=useState(true)

    //   const isAuthenticated = !!user;

    const authenticated = (userData, cb) => {
        setUser(userData);
        localStorage.setItem(login_storage_key, JSON.stringify(userData));
        setTimeout(cb, 100);
        setLoading(true)
    };

    const signOut = (cb) => {
        setUser(null);
        localStorage.removeItem(login_storage_key);
        setTimeout(cb, 100);
        
    };

    const authInfo = {
        isAuthenticated,
        user,
        authenticated,
        signOut,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
