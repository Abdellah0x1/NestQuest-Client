import { Outlet,Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";


export default function ProtectedRoute({allowedRoles}){
    const {user,loading} = useAuth();
    const navigate = useNavigate();

    if(loading) return <div>Loading...</div>
    if(!user) return <Navigate to="/login"/>

    if(!allowedRoles.includes(user.role)){
        navigate('/unauthorized');
    }
    return <Outlet/>
}