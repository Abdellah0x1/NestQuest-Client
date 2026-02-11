import Spinner from "../../components/Spinner";
import { useProperties } from "../../hooks/useAdminData"

function ManageProperties() {
    const {data: properties, isLoading, isError} = useProperties();
    if(isError) return <div className="text-center">
        error fetching properties
    </div>

    if(isLoading) return <div className="flex items-center justify-center">
        <Spinner/>
    </div>

    return (
        <div>
            <h2 className="font-bold text-2xl">Properties</h2>
            <input placeholder="Search for a property" className="py-2 px-4 border border-gray-600 w-full my-5"></input>
            <div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">area</th>
                            <th className="px-4 py-3">rating</th>
                            <th className="px-4 py-3">price</th>
                            <th className="px-4 py-3">type</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property, i)=> {
                            <tr key={i}>
                                <td>{property.title}</td>
                                <td>{property.area}</td>
                                <td>{property.rating}</td>
                                <td>{property.price}</td>
                                <td>{property.type}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageProperties
