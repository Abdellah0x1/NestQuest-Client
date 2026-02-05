import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMe, logout as logoutApi } from "../api/authApi";

const authContext = createContext(null);


export function AuthProvider({children}){
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    async function loadSession(){
        try{
            setLoading(true);
            const res = await getMe();
            setUser(res.data.data.user);
            
        }catch(err){
            console.log("can't load current user." ,err)
            setUser(null)
        }finally{
            setLoading(false)
        }
    }
    const logout = async ()=> {
        await logoutApi();
        setUser(null);
    }

    useEffect(()=>{loadSession()},[])

    const value= useMemo(()=>({user, setUser, loading, reload: loadSession,logout}),[user,loading]);
    return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth =()=> useContext(authContext);