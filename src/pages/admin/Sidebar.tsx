import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 sticky overflow-auto h-screen top-0 left-0 p-3 lg:p-5">
      <nav className="flex flex-col gap-3">
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white rounded-md w-full transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboardIcon className="shrink-0"></LayoutDashboardIcon>
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white rounded-md w-full transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/service"
        >
          Service List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white rounded-md w-full transition-all  flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/add-service"
        >
          Add Service
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
