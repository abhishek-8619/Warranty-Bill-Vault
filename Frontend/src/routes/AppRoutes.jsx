import { Route,Routes } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import PublicLayout from "../layouts/PublicLayout";

import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import ProductDetails from "../pages/ProductDetails"
import Products from "../pages/Products"
import Profile from "../pages/Profile"
import ProtectedRoute from "./ProtectedRoutes";

const AppRoutes=()=>{

    return(
        <Routes>

            <Route element={<PublicLayout/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Route>

            <Route element={<ProtectedRoute/>}>
                <Route element={<AppLayout/>}>
                <Route path="/" element={Dashboard}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="dashboard/product/:id" element={<ProductDetails/>}/>
                <Route path="dashboard/products" element={<Products/>}/>
                <Route path="dashboard/profile" element={<Profile/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes