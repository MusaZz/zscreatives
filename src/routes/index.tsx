// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Services from "../pages/Services";
import Service from "../pages/Service";

// Generate Routes
import { renderRoutes } from "./generate-routes";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: Home,
        path: "/",
        isPublic: true,
      },
      {
        name: "about",
        title: "About page",
        component: About,
        path: "/about",
        isPublic: true,
      },
      {
        name: "services",
        title: "Services page",
        component: Services,
        path: "/services",
        isPublic: true,
      },
      {
        name: "service",
        title: "Service page",
        component: Service,
        path: "/service/:id",
        isPublic: true,
      },
      {
        name: "blogs",
        title: "Blogs page",
        component: Blogs,
        path: "/blogs",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
