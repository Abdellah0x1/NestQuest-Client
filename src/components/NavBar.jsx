import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useAuth } from "../auth/authContext"
import { logout } from "../api/authApi"
import { useState } from "react"

import { IoClose, IoMenu } from "react-icons/io5";


function Navbar(){
  const {user,setUser} = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  
  function LogOut(){
    logout();
    setUser(null);
  }

  return <nav className="sticky z-50 top-0 px-6 md:px-20 py-4 bg-white flex items-center justify-between border border-b-gray-300">
    <NavLink to="/"><img src={Logo} className="w-20"/></NavLink>
    <ul className="hidden md:flex gap-5">
      <li><NavLink to="/"  className="p-2 rounded-sm  transition-all delay-75">Home</NavLink></li>
      <li><NavLink to="/browse" className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">Properties</NavLink></li>
      <li><NavLink to="/contact"  className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">Contact</NavLink></li>
      <li><NavLink to="/About"  className="p-2 rounded-sm hover:bg-gray-50 transition-all delay-75">About</NavLink></li>
    </ul>
    <div className="hidden md:flex gap-4">
      {
        !user ? <><NavLink to="/login" className="px-4 py-2 bg-black text-white cursor-pointer">Login</NavLink>
          <NavLink to="signup" className="px-4 py-2 border border-black cursor-pointer">Sign Up</NavLink></> :
        <div className="flex items-center gap-3">
          <NavLink to="/account">
            <div className="flex items-center gap-2 cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-2">
            <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">
              {user.name?.[0]?.toUpperCase()}
            </div>
            <span className="hidden md:block font-medium">{user.name}</span>
          </div>
          </NavLink>
          <button 
            className="rounded-full bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90 transition"
            onClick={LogOut}
          >
            Logout
          </button>
        </div>
      }
    </div>

    {/* mobile */}
    <button className="md:hidden cursor-pointer transition-all delay-300 ease-in-out" onClick={()=> setIsOpen(!isOpen)}>
     {isOpen ?  <IoClose size={30}/> : <IoMenu size={30}/>}
    </button> 

    {
      isOpen && <div className=" md:hidden absolute py-4 top-20 left-0 right-0 border-b border-b-gray-400 bg-white">
        <ul className="   flex flex-col gap-5">
      <li><NavLink onClick={()=> setIsOpen(!isOpen)} to="/"  className="border-b border-b-gray-300 p-2  transition-all delay-75">Home</NavLink></li>
      <li><NavLink onClick={()=> setIsOpen(!isOpen)} to="/browse" className="p-2  transition-all delay-75">Properties</NavLink></li>
      <li><NavLink onClick={()=> setIsOpen(!isOpen)} to="/contact"  className="p-2  transition-all delay-75">Contact</NavLink></li>
      <li><NavLink nClick={()=> setIsOpen(!isOpen)} to="/About"  className="p-2  transition-all delay-75">About</NavLink></li>
      {user && <li><NavLink onClick={()=> setIsOpen(!isOpen)} to="/account"  className="p-2  transition-all delay-75">My Account</NavLink></li>}
    </ul>
    {
      user ? 
    <div className="pt-5">
      <button 
          className="rounded-full bg-black px-4 py-2 text-white text-sm font-medium hover:bg-black/90 transition"
            onClick={logout}>
            Logout
      </button>
    </div>
      : <div className="pt-5 flex gap-3 px-2">
      <NavLink to="/login" className="px-4 py-2 bg-black text-white cursor-pointer">Login</NavLink>
      <NavLink to="signup" className="px-4 py-2 border border-black cursor-pointer">Sign Up</NavLink>
    </div>
    }
      </div>
    }
  </nav>
}

export default Navbar