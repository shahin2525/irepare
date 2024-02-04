import Sidebar from "@/pages/admin/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar></Sidebar>
      <div className="col-span-10 h-[200vh]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
