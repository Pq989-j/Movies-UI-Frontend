import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";

function PrivateRoute() {
    const { token } = useAuth()

    if(!token){
        return <Navigate to="/auth/login"
        replace />
    }

    return <Outlet />
}

export {PrivateRoute}