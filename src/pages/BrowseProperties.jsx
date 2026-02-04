import { CiSearch } from "react-icons/ci";
import { useProperties } from "../contexts/PropertyContext";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";


function BrowseProperties() {
    const {properties, loading} = useProperties();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    return (
        loading ? <div className="flex items-center justify-center min-h-screen"> 
            <div className="h-20 w-20 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        </div>
    : <motion.main  
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        <div className="p-10">
            <div className="relative flex items-center justfiy-center">
                <input value={query} onChange={e=> setQuery(e.value)} placeholder="Find your stay" className="w-full py-2 px-8 border border-black mb-5">
                </input>
                <CiSearch className="absolute text-xl -translate-y-[50%] left-2"/>
            </div>
            <div className="grid grid-col-2 sm:grid-cols-2 md:grid-cols-5 gap-5">
                {properties.map((property,i) => <div onClick={()=>navigate(`/browse/${property._id}`)} className="w-60 overflow-hidden rounded-md cursor-pointer shadow-md transition-all delay-150 hover:scale-[1.02]" key={i}>
                    <img className="w-full h-40 object-cover rounded-md" src={property.imageCover} alt="" />
                    <div className="p-2">
                        <h2 className="text-center mb-2 font-bold">{property.title}</h2>
                        <div className="flex gap-1 items-center font-semibold text-gray-600">
                            <IoMdStar/>
                            {property.rating}
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
        </motion.main>
    )
}

export default BrowseProperties
