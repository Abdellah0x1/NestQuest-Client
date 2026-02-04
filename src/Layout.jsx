import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"

function Layout() {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}


export default Layout
