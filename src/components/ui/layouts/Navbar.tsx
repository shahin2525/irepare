import { NavLink } from "react-router-dom";
import { Button } from "../button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    // <header className="h-20">
    //   <nav className="bg-green-500 max-w-[1220px] mx-auto flex justify-between items-center h-full px-[20px]">
    //     <span className="text-[32px]">IRepair</span>
    //     <ul className="space-x-4">
    //       <NavLink to="/">Home</NavLink>
    //       <NavLink to="/about">About</NavLink>
    //       <Button>
    //         <NavLink to="/login">Login</NavLink>
    //       </Button>
    //     </ul>
    //   </nav>
    // </header>

    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className=" h-16 fixed w-full z-[999] bg-white"
    >
      <nav className="flex justify-between items-center w-full h-full px-[20px] max-w-[1230px] mx-auto">
        <span> IRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
