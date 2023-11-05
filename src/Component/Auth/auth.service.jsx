/*import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login_storage_key = "bgr_login";

  const storedUser = localStorage.getItem(login_storage_key);
  console.log(storedUser);
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  const [user, setUser] = useState(initialUser);

  const isAuthenticated = !!user;

  const authenticated = (userData, cb) => {
    setUser(userData);
    localStorage.setItem(login_storage_key, JSON.stringify(userData));
    setTimeout(cb, 100);
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
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
*/