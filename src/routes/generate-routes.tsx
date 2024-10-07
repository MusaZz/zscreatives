// Lodash
import flattenDeep from "lodash/flattenDeep";

// React Router
import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { FC } from "react";

// Define the route type
interface RouteType {
  path?: string;
  name?: string;
  component?: React.FC;
  routes?: RouteType[];
  isPublic?: boolean;  // Add isPublic to RouteType
}

// Utility function to flatten nested routes
const generateFlattenRoutes = (routes?: RouteType[]): RouteType[] => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

// Define the layout type
interface LayoutProps {
  layout: FC;
  routes: RouteType[];
}

// Props for the Routes component
interface RoutesProps {
  isAuthorized: boolean;
}

// Main renderRoutes function
export const renderRoutes = (mainRoutes: LayoutProps[]): FC<RoutesProps> => {
  const Routes: FC<RoutesProps> = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map(({ component: Component, path, name, isPublic }) => {
            return (
              Component &&
              path && (
                <Route
                  key={name}
                  element={
                    <ProtectedRoute
                      isPublic={!!isPublic}  // Pass isPublic down
                      isAuthorized={isAuthorized}
                    />
                  }
                  path={path}
                >
                  <Route element={<Component />} />
                </Route>
              )
            );
          })}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};