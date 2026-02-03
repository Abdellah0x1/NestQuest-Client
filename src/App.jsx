import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import  NavBar  from "./components/NavBar" 
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProtectedRoute from "./auth/ProtectedRoute"
import BrowseProperties from "./pages/BrowseProperties"
import PropertyDetails from "./pages/PropertyDetails"

import { AuthProvider } from "./auth/authContext"
import { PropertiesProvider } from "./contexts/PropertyContext"

import { motion } from "framer-motion";



function App() {

  return (
  <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
  >
  <BrowserRouter>
    <NavBar className="mx-auto w-fit"/>
      <AuthProvider>
        <PropertiesProvider>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/browse" element={<BrowseProperties/>}/>
            <Route path="/browse/:id" element={<PropertyDetails/>}/>
            <Route element={<ProtectedRoute/>}>
            </Route>
        </Routes>
        </PropertiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </motion.main>
  )
}

export default App
