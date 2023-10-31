import React from 'react';
import { authService } from '../Auth/AuthGuard';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
  const login= authService
  const location = useLocation();

  if(authService.isAuthenticated){
    return
  }
  if(authService.user){
    return
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRouter;