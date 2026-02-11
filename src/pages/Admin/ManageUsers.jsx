import { useState } from "react";

import { useUsers } from "../../hooks/useAdminData"
import Spinner from "../../components/Spinner";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDeleteUser } from "../../hooks/useAdminData";
import { toast } from "react-toastify";
import NewUserModal from "../../components/NewUserModal";


function ManageUsers() {
    const {data: users,isLoading} = useUsers();
    const {mutate: deleteUser, isSuccess, isError} = useDeleteUser();
    const [showModal, setShowModal] = useState(false);

    if(isSuccess) toast.success("User deleted successfully")
    if(isError) toast.error("Error deleting user")

    if(isLoading) return <div  className="h-screen flex items-center justify-center"> 
        <Spinner size={100}/>
    </div>

    return (
        <>
        {showModal && <NewUserModal setShowModal={setShowModal}/>}
        <div>
            <h2 className="font-bold text-2xl">Users</h2>
            <button onClick={()=> setShowModal(true)} className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all delay-150 mt-4">Add User</button>
            <table className="w-full mt-4 border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2 text-left">ID</th>
                        <th className="border p-2 text-left">Name</th>
                        <th className="border p-2 text-left">Email</th>
                        <th className="border p-2 text-left">Role</th>
                        <th className="border p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="hover:bg-gray-100">
                            <td className="border p-2">{user._id}</td>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2"> 
                                <button className="p-1 hover:bg-blue-100 rounded-md">
                                    <FaEdit className="text-blue-500 hover:text-blue-700 w-10 cursor-pointer"/>
                                </button>
                                <button className="p-1 hover:bg-red-100 rounded-md" onClick={()=> deleteUser(user._id)}>
                                    <MdDeleteForever className="text-red-500 hover:text-red-700 w-10 cursor-pointer"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default ManageUsers
