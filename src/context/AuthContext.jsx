import { createContext, useState } from "react";

const API = import.meta.env.VITE_API_URL

export const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(() => 
    localStorage.getItem("token"))

    async function login(email, password) {
        const response = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password}),
        })
        if(!response.ok) throw new Error("Email o contraseña incorrectos")
        const data = await response.json()
        localStorage.setItem("token", data.token)
        setToken(data.token)
        await loadProfile(data.token)
        
    }

    async function loadProfile(token) {
        if(!token) return;

        const response = await fetch(`${API}/auth/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        if(!response.ok) return logout();
        const {user} = await response.json()
        setUser(user)

    }
    function logOut() {
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
    }

    const value = {user, token, login, logOut, loadProfile}
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

