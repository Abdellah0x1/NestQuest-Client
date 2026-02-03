import { useNavigate, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

import api from  "../api/axios"
import Slider from "../components/Slider";



function PropertyDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState({});
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        async function getProperty(){
            try {
                setIsLoading(true)
                const res = await api.get(`/properties/${id}`);
                setProperty(res.data.data.property)
            }catch(error){
                console.log('error getting property details', error)
            }finally{
                setIsLoading(false)
            }
        }
        getProperty();
    },[id   ])

    return isLoading ? 
            <div className="flex items-center justify-center min-h-screen"> 
            <div className="h-20 w-20 animate-spin rounded-full border-2 border-gray-300 border-t-black" />
        </div>
            : <div className="p-20 ">
            <button className="flex items-center gap-2 p-2 border cursor-pointer" onClick={()=> navigate(-1)}><FaArrowLeft/> Back</button>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div>
                <h3 className="font-bold my-5 text-2xl">{property.title}</h3>
                <div className="w-150 mb-5 h-100 overflow-hidden flex items-center"><Slider  images={property.images ||[]}/></div>
            </div>
            <div>
                <p className="text-xl text-gray-700 border-b pb-2 mb-4 border-b-gray-600">{property.description}</p>
                <ul className="flex gap-10">
                    <li className="bg-gray-100 p-2 rounded-md">bedrooms: {property.bedrooms}</li>
                    <li className="bg-gray-100 p-2 rounded-md">bathrooms: {property.bathrooms}</li>
                    <li className="bg-gray-100 p-2 rounded-md" >area: {property.area}km</li>
                </ul>
            </div>
            </div>
        </div>
}

export default PropertyDetails
