import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";


function Contact() {
    const navigate = useNavigate()
    return (
        <motion.main  
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        <div className="w-full h-screen  flex flex-col items-center justify-center">
        <button onClick={()=> navigate(-1)} className="mb-4 flex gap-2 justify-center items-center p-2 border border-r-2 border-b-2 transition-all delay-150 cursor-pointer hover:border-1">
            <BiLeftArrowAlt className="text-xl"/>
            Go Back
        </button>
            <div className="w-[50%] border border-black border-r-4 border-b-4 p-4">
                <h2 className="font-bold mb-5 text-center">Please fill out the form below</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label>Full Name</label>
                        <input className="border border-gray-400 p-2 border border-black" placeholder="chno smiyt hh"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Email</label>
                        <input className="border border-gray-400 p-2 border border-black" placeholder="Your email hh"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Inquiry Purpose</label>
                        <textarea className="border border-gray-400 p-2 border border-black" placeholder="Chno bghiti hh"/>
                    </div>
                    <button className="p-4 bg-black text-white cursor-pointer hover:bg-gray-700 transition-all delay-75">Submit</button>
                </form>
            </div>
        </div>
        </motion.main>
    )
}

export default Contact
