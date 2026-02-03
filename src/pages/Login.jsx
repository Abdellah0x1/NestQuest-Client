import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(e){
        e.preventDefault();
    }

    return (
    <motion.main 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        <div className="h-screen flex items-center justify-center">
            <form onSubmit={onSubmit} className="border border-r-4 border-b-4 px-6 py-8  w-90 ">
                <h2 className="text-center font-semibold mb-4">Login to your account</h2>
                <div className="flex flex-col gap-2  mb-2">
                    <label>email:</label>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email@example.com" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                <div className="flex flex-col gap-2  mb-4">
                    <label>password:</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="password" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                    <button type="sumbit" className="w-full bg-black text-white py-2 mt-4 cursor-pointer hover:bg-gray-800 rounded-sm">Login</button>
                    <NavLink className="text-sm text-center text-blue-600 hover:bg-blue-50 p-2 transition-all delay-75 flex justify-center mt-2"  to="/signup">Sign Up</NavLink>
            </form>
        </div>
    </motion.main>
    )
}

export default Login
