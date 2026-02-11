import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { MdDashboard} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";



function SideBar({isOpen, setIsOpen}) {

    function isActive({isActive}){
        return isActive ? "text-blue-500 bg-blue-100 py-2 px-4 rounded-md transition-all delay-75 cursor-pointer w-full font-semibold flex items-center gap-2"
        :"py-2 px-4 rounded-md transition-all hover:bg-gray-100 delay-75 cursor-pointer w-full font-semibold text-gray-600 flex items-center gap-2"
    }

    return (
        <div className=" relative flex flex-col items-center w-full border-r border-r-gray-300 h-screen shadow-xl transition-all delay-300 ease-in-out">
            <img className="w-[40%] object-cover mb-10" src={Logo} alt = "logo"/>
            <div className="absolute right-0 top-5 -translate-x-1.5 bg-white rounded-md p-2 border border-gray-400 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <MdKeyboardArrowLeft/> : <MdKeyboardArrowRight/>}
            </div>
            <ul className="flex flex-col w-full justify-center gap-4 p-3">
                <li >
                    <NavLink className={isActive} to="" end>
                    <MdDashboard/>
                    {isOpen ? "Dashboard" : ""}
                    
                </NavLink></li>
                <li className="flex items-center">
                <NavLink className={isActive} to="users">
                    <FaUsers/>
                    
                    {isOpen ? "Users" : ""}
                </NavLink>
                </li>
                <li><NavLink className={isActive} to="properties">
                    <FaHouse/>
                    
                    {isOpen ? "Properties" : ""}
                </NavLink></li>
                <li><NavLink className={isActive} to="bookings">
                    <TbBrandBooking/>
                    {isOpen ? "Bookings" : ""}
                </NavLink></li>
            </ul>

            <ul className="flex flex-col w-full p-2 gap-2 pt-4 border-t border-t-gray-300 mt-auto mb-10">
                <li className="flex gap-2  items-center font-semibold text-gray-600 cursor-pointer  hover:bg-gray-100 p-2 rounded-md">
                    <IoMdSettings className="inline-block text-center"/>
                     {isOpen ? 'Settings' : ''}
                    </li>
                <li className="px-4 py-2 bg-black text-white rounded-md cursor-pointer transition-all delay-75 text-center"> {isOpen ? 'Logout' : <CiLogout size={20} className="font-bold"/>} </li>
            </ul>
        </div>
    )
}

export default SideBar
