import { BrowserRouter, Routes, Route, } from "react-router-dom"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProtectedRoute from "./auth/ProtectedRoute"
import BrowseProperties from "./pages/BrowseProperties"
import PropertyDetails from "./pages/PropertyDetails"
import ForgotPassword from "./pages/Auth/ForgotPassword"

import { AuthProvider } from "./auth/authContext"
import { PropertiesProvider } from "./contexts/PropertyContext"

import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion";
import Layout from "./Layout"
import NotFound from "./pages/NotFound"
import Account from "./pages/Auth/Account"
import ResetPassword from "./pages/Auth/ResetPassword"
import Admin from "./pages/Admin/Admin"
import Unauthorized from "./pages/Unauthorized"
import ManageUsers from "./pages/Admin/ManageUsers"
import ManageProperties from "./pages/Admin/ManageProperties"
import Dashboard from "./pages/Admin/Dashboard"
import Bookings from "./pages/Admin/Bookings"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
  >
      <ToastContainer position="top-center" draggable theme="dark"/>

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
                  <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
                  <Route path="/*" element={<NotFound/>}/>
                  <Route element={<ProtectedRoute allowedRoles={['user']}/>}>
                    <Route path="/Account" element={<Account/>} />
                  </Route>
                  <Route element={<ProtectedRoute allowedRoles={['admin']}/>}>
                      <Route path="/admin" element={<Admin/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="users" element={<ManageUsers/>}/>
                        <Route path="properties" element={<ManageProperties/>}/>
                        <Route path="bookings" element={<Bookings/>}/>
                      </Route>
                  </Route>
                  <Route path="/unauthorized" element={<Unauthorized/>}/>
            </Routes>
            </PropertiesProvider>
          </AuthProvider>
        </BrowserRouter>
      </motion.main>
    </QueryClientProvider>
  )
}

export default App
