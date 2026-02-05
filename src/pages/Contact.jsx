import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";



function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [inquiry, setInquiry] = useState("");

    const onSubmit = (e)=> {
        e.preventDefault();
        setEmail("")
        setInquiry("")
        setName("")
        toast("Form Sent");
    }
    return (
        <motion.main  
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        <ToastContainer position="top-center" draggable theme="dark"/>
        <div className="w-full h-screen  flex flex-col items-center pt-10">

            <div className="w-[50%] border border-gray-400 rounded-md p-4">
                <h2 className="font-bold mb-5 text-center">Please fill out the form below</h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label>Full Name</label>
                        <input value={name} onChange={e=> setName(e.target.value)} className="border border-gray-400 p-2 border border-black" placeholder="Full name"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Email</label>
                        <input value={email} onChange={e=> setEmail(e.target.value)} type="email" className="border border-gray-400 p-2 border border-black" placeholder="Your email "/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Inquiry Purpose</label>
                        <textarea value={inquiry} onChange={e=> setInquiry(e.target.value)} className="border border-gray-400 p-2 border border-black" placeholder="Inquiry Purpose"/>
                    </div>
                    <button onClick={onSubmit} className="p-4 bg-black text-white cursor-pointer hover:bg-gray-700 transition-all delay-75">Submit</button>
                </form>
            </div>
        </div>
        </motion.main>
    )
}

export default Contact
