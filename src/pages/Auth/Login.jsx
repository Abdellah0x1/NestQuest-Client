import { NavLink, useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { useState } from "react";
import {login} from "../../api/authApi"
import { toast } from 'react-toastify';
import { BiLeftArrowAlt } from "react-icons/bi";
import { useAuth } from "../../auth/authContext";

import Google from "../../assets/google.png"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {googleLogin } = useAuth();

    async function handleGoogleLogin(credentialResponse){
        try{
            await googleLogin(credentialResponse.credential);
            navigate('/')
        }catch(error){
            toast.error('error log in with google')
            console.log(error)
        }
    }

    async function onSubmit(e){
        e.preventDefault();
        try {
            await login({email,password})
            setEmail("");
            setPassword("");
            toast("Log in successful");
            
            navigate('/')
        }catch(err){
            console.log(err)
            toast("Incorrect Email or Password hh");
        }
    }

    return (
    <motion.main 
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}>
        
        <div className="h-screen flex flex-col items-center justify-center">
            <NavLink to="/"  className="mb-4 flex gap-2 mb-10 items-center p-2 border  transition-all delay-150 cursor-pointer hover:border">
                        <BiLeftArrowAlt className="text-xl"/>
                        Go Back
            </NavLink>
            <div  className="border border-gray-300 rounded-md px-6 py-8  w-90 ">
                <h2 className="text-center font-semibold mb-4">Login to your account</h2>
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2  mb-2">
                    <label>email:</label>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="email@example.com" className="border border-gray-200 text-black px-2 py-1"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label>password:</label>
                    <input autoComplete="current-password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="password" className="border border-gray-200 text-black px-2 py-1"></input>
                    <NavLink to="/forgotPassword" className="hover:text-blue-500 transition-all delay-150">Forgot Your Password ?</NavLink>
                </div>
                    <button type="sumbit" className="w-full bg-black text-white py-2 mt-4 cursor-pointer hover:bg-gray-800 rounded-sm">Login</button>
                </form>
                <div className="border-b border-gray-300 my-5"></div>
                <button className="w-full flex gap-2 justify-center font-bold border border-gray-400 text-gray-600 py-2 mt-4 cursor-pointer hover:bg-gray-100 rounded-sm">
                    <img src={Google} className="w-6"/>
                    Google
                </button>

                <NavLink className="text-sm text-center text-blue-600 hover:bg-blue-50 p-2 transition-all delay-75 flex justify-center mt-2"  to="/signup">Sign Up</NavLink>
            </div>
        </div>
    </motion.main>
    )
}

export default Login
