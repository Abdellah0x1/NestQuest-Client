import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"
import { ToastContainer } from "react-toastify"

function Layout() {
    return (
        <div>
            <ToastContainer position="top-center" draggable theme="dark"/>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}


export default Layout
