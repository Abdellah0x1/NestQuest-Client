import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from "react";
import { signup } from "../api/authApi";
import { ToastContainer,toast } from "react-toastify";

function Signup() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirm,setPasswordConfirm] = useState("");

    async function onSubmit(e){
        try{
        e.preventDefault();
        await signup({name,email,password,passwordConfirm});
        setName("")
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        toast("signed up seccessfully")
        }catch(err){
            console.log("error singup",err);
            toast(err.message)
        }
    }



    return (
    <motion.main 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
    <ToastContainer position="top-center" draggable theme="dark"/>

        <div className="h-screen flex items-center justify-center">
            <form onSubmit={onSubmit} className="border border-black border-r-4 border-b-4  px-6 py-8 w-90 ">
                <h2 className="text-center font-semibold mb-4">Login to your account</h2>
                <div className="flex flex-col gap-2 mb-2">
                    <label>full name:</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="full name" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <label>email:</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="email@example.com" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                <div required className="flex flex-col gap-2 mb-4">
                    <label>password:</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="password" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label>Confirm password:</label>
                    <input value={passwordConfirm} onChange={e=>setPasswordConfirm(e.target.value)} required type="password" placeholder="Confirm password" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                    <button type="sumbit" className="w-full bg-black text-white mt-4 py-2 cursor-pointer hover:bg-gray-800 rounded-sm">Sign up</button>
                    <NavLink className="text-sm text-center text-blue-600 hover:bg-blue-50 p-2 transition-all delay-75 flex justify-center mt-2" to="/login">Login</NavLink>
            </form>
        </div>
    </motion.main>
    )
}

export default Signup
