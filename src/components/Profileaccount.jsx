import { useContext, useEffect } from "react";
import { useAuth } from "../Hooks/UseAuth";

function Profile() {
    const { user, loadProfile, token } = useAuth()

    useEffect(() => {
        if (token && !user) {
            loadProfile(token);
        }
    }, [token]);

    if (token && !user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-gray-950">
                Cargando perfil...
            </div>
        );
    }
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                No estás logueado
            </div>
        );
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
            <div className="rounded-xl border border-gray-700 p-10">
                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
                    👤
                </div>
                <h1 className="text-3xl font-bold mb-4">
                    Hola, {user.name}
                </h1>

                <p className="text-gray-300">
                    {user.email}
                </p>
            </div>
        </div>
    );
}

export  {Profile};