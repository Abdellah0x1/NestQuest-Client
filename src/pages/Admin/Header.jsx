import { IoIosNotifications } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { Search } from "lucide-react";

function Header({className}) {
    return (
        <div className={`${className} flex justify-between py-2 px-4`}>
            <div className="relative">
                <input placeholder="Search" className="w-70 p-2 border border-gray-400 rounded-md"></input>
                <kbd className="text-xs bg-gray-100 p-1 rounded absolute flex right-4 top-1/2 -translate-y-1/2">Ctrl k</kbd>
            </div>
            <div className="flex gap-5">
                <IoIosNotifications className="border border-gray-400 rounded-md cursor-pointer" size={40}/>
                <CiLight className="border border-gray-400 rounded-md cursor-pointer" size={40}/>
            </div>
        </div>
    )
}

export default Header
