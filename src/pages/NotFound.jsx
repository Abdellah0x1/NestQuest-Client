import { TbError404 } from "react-icons/tb";


function NotFound() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
            <TbError404 className="text-9xl"/>
            <p className="text-2xl text-gray-500">Page Not Found</p>
        </div>
    )
}

export default NotFound
