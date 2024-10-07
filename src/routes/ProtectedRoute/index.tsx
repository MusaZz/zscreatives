// React Router
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isPublic: boolean;
  isAuthorized: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isPublic,
  isAuthorized,
}) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
