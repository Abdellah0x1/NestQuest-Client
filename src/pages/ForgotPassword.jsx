import { NavLink } from "react-router-dom"

function ForgotPassword() {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col gap-2 w-[40%] md:w-[20%]">
                <input className=" bg-gray-50 py-2 px-4  mb-4 rounded-md outline-none border border-gray-300 focus:border-black" placeholder="Your email"></input>
                <button className="bg-black text-white py-2 px-4 rounded-md cursor-pointer transition-all delay-150 hover:bg-gray-700" type="submit">Submit</button>
                <NavLink to="/login" className="w-full text-center py-2 px-4 border border-gray-100 rounded-md bg-gray-50 transition-all delay-150 hover:bg-gray-100">Cancel</NavLink>
            </form>
        </div>
    )
}

export default ForgotPassword
