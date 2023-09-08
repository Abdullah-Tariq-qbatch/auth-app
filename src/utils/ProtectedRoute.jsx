/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ page: Page, isAuthenticated, ...rest }) => {
  return (
    <>
      {isAuthenticated ? (
        <Page {...rest} />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default ProtectedRoute;
