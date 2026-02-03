import { createContext, useContext, useState, useEffect} from "react";
import api from "../api/axios"

const PropertyContext = createContext(null);


export function PropertiesProvider({children}){
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function getProperties(){
            try {
                setLoading(true)
                const res = await api.get('/properties');
                setProperties(res.data.data.properties)
                
                
            }catch(error){
                console.log("error fetching properties ", error)
            }finally{
                setLoading(false);
            }
        }
        getProperties()
    },[])

    return <PropertyContext.Provider value={{properties,setProperties,loading}}>
        {children}
    </PropertyContext.Provider>
}

export function useProperties(){
    const {properties,setProperties, loading} = useContext(PropertyContext)
    return {properties,setProperties, loading};
}