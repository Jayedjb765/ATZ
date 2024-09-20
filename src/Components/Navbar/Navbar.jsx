import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
      
        <a class="btn btn-ghost text-xl">
        AtZ Technology</a>
      </div>
      
      <div class="navbar-end">
       
        <NavLink to="/adduser" className="text-white mr-10 p-2 bg-blue-600 rounded-lg " >Add New Task</NavLink>
      </div>
    </div> 
  );
};

export default Navbar;
