import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
