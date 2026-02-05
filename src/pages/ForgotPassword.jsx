import { useState } from "react"
import { NavLink } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import api from "../api/axios"

function ForgotPassword() {
    const [email, setEmail] = useState("");
    async function onSubmit(e){
        try {
            e.preventDefault();
            await api.post("/forgotPassword", {email})
            toast('Check Your email');
        }catch(error){
            console.log("error sending reset password token", error);
            setEmail("")
            toast(error.message)
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <ToastContainer theme="dark" draggable position="top-center"/>
            <form onSubmit={onSubmit} className="flex flex-col gap-2 w-[60%]  md:w-[20%]">
                <input required type="email" className=" bg-gray-50 py-2 px-4  mb-4 rounded-md outline-none border border-gray-300 focus:border-black" placeholder="Your email" value={email} onChange={e=> setEmail(e.target.value)}></input>
                <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer transition-all delay-150 hover:bg-gray-700" type="submit">Submit</button>
                <NavLink to="/login" className="w-full text-center py-2 px-4 border border-gray-100 rounded-md bg-gray-50 transition-all delay-150 hover:bg-gray-100">Cancel</NavLink>
            </form>
        </div>
    )
}

export default ForgotPassword
