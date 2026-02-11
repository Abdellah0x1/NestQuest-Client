import { useState } from "react"
import { useAuth } from "../../auth/authContext"
import { NavLink, useNavigate } from "react-router-dom"
import {toast } from "react-toastify"
import api from "../../api/axios"



function Account() {
    const {user} = useAuth()
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();

    async function onSubmit(e){
        e.preventDefault();
        try {
            await api.patch('/users/updateMe',{name,email});
            toast("Profile Updated");
            navigate('/');
        }catch(error){
            console.log('error updating user info', error);
        }
    }

    return (
        <div className="h-screen flex flex-col gap-10 items-center pt-10 bg-gray-100">
            
            <div className="flex flex-col gap-2">
                <div className="font-bold text-6xl w-30 h-30 rounded-full bg-black text-white flex justify-center items-center">{user.name[0].toUpperCase()}</div>
            </div>
            <form className="flex flex-col gap-5 w-[70%]" onSubmit={onSubmit}>
                <div className="flex flex-col gap-1">
                    <label  htmlFor="name">Full Name:</label>
                    <input value={name} onChange={e=> setName(e.target.value)} placeholder="Full Name"  className="bg-white py-2 px-4 border border-gray-300"></input>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Email</label>
                    <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email"  className="bg-white py-2 px-4 border border-gray-300"></input>
                </div>
                <div className="flex gap-4 justify-end">
                    <NavLink className="border bg-white py-2 px-4 transition-all delay-75 hover:text-white hover:bg-black" to="/">Back To Home</NavLink>
                    <button type="save" className="py-2 px-4 bg-black text-white cursor-pointer border hover:text-black hover:bg-white hover:border-black">Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default Account
