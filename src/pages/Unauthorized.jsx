import { FiAlertOctagon } from "react-icons/fi";


function Unauthorized() {
    return (
        <div className="flex flex-col items-center min-h-screen pt-40">
                <FiAlertOctagon size="200"/>
                <p className="font-bold text-4xl pt-10">NOT AN ADMIN</p>
        </div>
    )
}

export default Unauthorized
