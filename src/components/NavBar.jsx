import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
function Navbar(){
  return <div className="sticky z-50 top-0  px-20 py-4 bg-white flex items-center justify-between border border-b-gray-300">
    <NavLink to="/"><img src={Logo} className="w-20"/></NavLink>
    <ul className="flex gap-5 ">
      <li><NavLink to="/"  className="p-2 rounded-sm  transition-all delay-75">Home</NavLink></li>
      <li><NavLink to="/browse" className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">Properties</NavLink></li>
      <li><NavLink to="/contact"  className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">Contact</NavLink></li>
      <li><NavLink to="/About"  className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">About</NavLink></li>
    </ul>
    <div className="flex gap-4">
      <NavLink to="/login" className="px-4 py-2 bg-black text-white cursor-pointer">Login</NavLink>
      <NavLink to="signup" className="px-4 py-2 border border-black cursor-pointer">Sign Up</NavLink>
    </div>
  </div>
}

export default Navbar