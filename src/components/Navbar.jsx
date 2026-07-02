import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function Navbar() {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className="flex items-center justify-between bg-gray-950 px-6 py-4 text-white border-b border-gray-800">

            {/* Logo */}
            <NavLink to="/" className="text-xl font-bold text-red-500">
                MovieApp 🎬
            </NavLink>

            <div className="flex items-center gap-6 text-xl">

                <NavLink to="/" >
                    Inicio
                </NavLink>

                <NavLink to="/movies">
                    Peliculas
                </NavLink>

                <NavLink to="/about">
                    Acerca de
                </NavLink>

            </div>
            {/* Derecha */}
            <div className="flex items-center gap-6">

                
                {!user && (
                    <>
                        <NavLink to="/auth/login" className="hover:text-red-400 transition-colors self-center">
                            Login
                        </NavLink>

                        <NavLink to="/auth/register" className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                            Registro
                        </NavLink>
                    </>
                )}

               
                {user && (
                    <>
                        {/* Icono usuario */}
                        <NavLink to="/profile" className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center">
                                👤
                            </div>

                            <span className="text-sm text-gray-300">
                                {user.email}
                            </span>
                        </NavLink>

                        
                        <button
                            onClick={logOut}
                            className="rounded bg-red-600 px-3 py-1 text-sm hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </>
                )}

            </div>
        </nav>
    );
}

export {Navbar};