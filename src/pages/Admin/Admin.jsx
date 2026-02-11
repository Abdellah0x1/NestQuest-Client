import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import { useState } from "react"
import Header from "./Header"


function Admin() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={`grid ${isOpen ? 'grid-cols-[250px_1fr]': 'grid-cols-[80px_1fr]'} grid-rows-[auto_1fr]`}>
            <aside className="row-span-2 transition-all duration-300 ease-in-out">
                <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </aside>
            <Header className="bg-white shadow-md"/>
            <main className="py-10 px-10 ">
                <Outlet/>
            </main>
        </div>
    )
}

export default Admin
