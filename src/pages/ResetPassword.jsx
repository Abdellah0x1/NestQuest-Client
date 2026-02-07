import { useState } from "react"
import { useParams } from "react-router-dom"

import api from "../api/axios"
import { toast } from "react-toastify"

function ResetPassword() {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const {token} = useParams();
    async function onSubmit(e){
        e.preventDefault();
        try{
            const res = await api.post(`/users/resetPassword/${token}`,{password,passwordConfirm});
            toast("Password updated ✅")
        }catch(err){
            console.log("error updating password",err)
            toast(err.message)
        }
    }

    return (<div className="flex justify-center items-center h-screen">
            <form onSubmit={onSubmit} className="flex flex-col    gap-2 w-[60%]  md:w-[20%] px-4 py-6 border border-gray-300 rounded-md">
                <h2 className="font-semibold text-xl mb-2 text-center">Reset your password</h2>
                <p className=" text-gray-600 mb-2">Please enter a new password</p>
                <input required type="password" className=" bg-gray-50 py-2 px-4  mb-4 rounded-md outline-none border border-gray-300 focus:border-black" placeholder="New Password" value={password} onChange={e=> setPassword(e.target.value)}></input>

                <input required type="password" className=" bg-gray-50 py-2 px-4  mb-4 rounded-md outline-none border border-gray-300 focus:border-black" placeholder="Confirm Password" value={passwordConfirm} onChange={e=> setPasswordConfirm(e.target.value)}></input>

                <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer transition-all delay-150 hover:bg-gray-700" type="submit">Confirm</button>

            </form>
        </div>)
    
}

export default ResetPassword
