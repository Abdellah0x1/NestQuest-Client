import { createPortal } from "react-dom"
import { LiaTimesSolid } from "react-icons/lia";

import {motion} from "framer-motion"
import { useState } from "react";
import { useAddUser } from "../hooks/useAdminData";
import { toast } from "react-toastify";


function NewUserModal({setShowModal}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [role, setRole] = useState("user");
    const {mutate: addUser, isError, isSuccess} = useAddUser();

    if(isError) toast.error("Error adding user");
    if(isSuccess) toast.success("User Added Successfully");

    function onSubmit(e){
        e.preventDefault();
        addUser({name, email, password, passwordConfirm, role})
        setName("")
        setEmail("")    
        setPassword("")
        setPasswordConfirm("")
    }

    return createPortal(
            <motion.div initial= {{opacity: 0, scale: 0}} animate = {{opacity: 1, scale: 1}} className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white p-6 rounded-md w-[90%] md:w-[40%]">
                <h2 className="font-bold text-xl mb-4">Add New User</h2>
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all delay-150 cursor-pointer text-xl" onClick={()=> setShowModal(false)}>
                    <LiaTimesSolid/>
                </button>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <input value={name} onChange={(e) => setName(e.target.value.trim())} type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value.trim())} type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input value={password} onChange={(e) => setPassword(e.target.value.trim())} type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value.trim())} type="password" placeholder="Confirm Password" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <select value={role} onChange={(e)=> setRole(e.target.value)} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <button type="submit" className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all delay-150">Create User</button>
                </form>
            </div>
        </motion.div>,
        document.body
    )
}

export default NewUserModal
