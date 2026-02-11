import HomeImg from "../assets/3d-model.png"

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Testimonials from "../components/Testimonials";



function Home() {
    
    return (
        <motion.main 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        <div>
            <div className="flex flex-col md:flex-row md:gap-5 justify-between items-start pt-20 md:px-30 px-4  h-[90vh]">
            <div className='md:w-[40%] flex flex-col justify-center items-start gap-6'>
                <h1 className='font-bold text-5xl'>Find Your Perfect Stay, Anywhere.</h1>
                <p>Explore thousands of unique properties around the world — from modern city apartments to peaceful countryside villas. Whether you are planning a weekend getaway, a business trip, or a long-term stay, we help you find the perfect place that feels like home.</p>
                <div className='flex gap-4'>
                    <NavLink to="/login" className='flex gap-2 items-center cursor-pointer hover:bg-white hover:text-black hover:border hover:border-2-black transition-all delay-150 bg-black text-white py-2 px-4'>Get Started <FaArrowRightLong/></NavLink>
                    <NavLink to="/contact" className='border border-2-black px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-150'>Contact Us</NavLink>
                </div>
            <div className="w-full border border-black  relative" >
                <input placeholder="Find your stay" className="w-full py-4 px-10">   
                </input>
                <CiSearch className="absolute text-xl top-[50%]  -translate-y-[50%] left-2 "/>
            </div>
            </div>
            <img src={HomeImg} className='md:w-[45%] '></img>
            </div>
            {/* features */}
            <div className="bg-gray-50 px-4 md:px-30 pt-10 pb-15">
                <h2 className="font-bold text-4xl text-center mb-10">Our Features </h2>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="border rounded-tr border-r-5 border-b-5 p-4 transition-all delay-100 hover:border">
                        <h2 className="text-xl font-bold mb-2">Verified Luxury Villas</h2>
                        <p>
                            Hand-picked properties with high-quality photos, amenities, and trusted reviews
                        </p>
                    </div>
                    <div className="border rounded-tr border-r-5 border-b-5 p-4 transition-all delay-100 hover:border">
                        <h2 className="text-xl font-bold mb-2">Smart Search & Filters</h2>
                        <p>
                            Filter by location, price, bedrooms, pool/sea view, and availability in seconds.
                        </p>
                    </div>
                    <div className="border rounded-tr border-r-5 border-b-5 p-4 transition-all delay-100 hover:border">
                        <h2 className="text-xl font-bold mb-2">Secure Booking & Payments</h2>
                        <p>
                            Filter by location, price, bedrooms, pool/sea view, and availability in seconds.
                        </p>
                    </div>
                </div>
            </div>
    
            <Testimonials/>
        </div>
        </motion.main>
    )
}

export default Home
