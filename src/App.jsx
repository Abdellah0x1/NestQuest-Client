import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProtectedRoute from "./auth/ProtectedRoute"
import BrowseProperties from "./pages/BrowseProperties"
import PropertyDetails from "./pages/PropertyDetails"
import ForgotPassword from "./pages/ForgotPassword"

import { AuthProvider } from "./auth/authContext"
import { PropertiesProvider } from "./contexts/PropertyContext"

import { motion } from "framer-motion";
import Layout from "./Layout"
import NotFound from "./pages/NotFound"
import Account from "./pages/Account"



function App() {

  return (
  <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
  >
  <BrowserRouter>
      <AuthProvider>
        <PropertiesProvider>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/browse" element={<BrowseProperties/>}/>
                <Route path="/browse/:id" element={<PropertyDetails/>}/>
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword/>}/>
              <Route path="/*" element={<NotFound/>}/>
                <Route element={<ProtectedRoute/>}>
              <Route path="/Account" element={<Account/>} />
            </Route>
        </Routes>
        </PropertiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </motion.main>
  )
}

export default App
