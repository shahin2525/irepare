import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home";
// import Home from "@/pages/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "service",
        element: <ServiceList></ServiceList>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
