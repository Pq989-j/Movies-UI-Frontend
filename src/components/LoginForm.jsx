import { useState } from "react";
import { Button } from "./Button";
import { useAuth } from "../Hooks/UseAuth";

const API = import.meta.env.VITE_API_URL

function LoginForm() {
	const { login } = useAuth();
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target
        setData((prev) => ({...prev, [name]: value}))
    }

	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setIsLoading(true);
		try {
			await login(data.email, data.password);
			// aquí, tras loguear, navegarás al área privada (lo cerramos en la próxima clase)
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}

    return(
        <form onSubmit={handleSubmit} className="min-inline-20 bg-black mx-auto flex max w-md flex-col gap-4 p-6">
            <h2 className="flex justify-center text-2xl font bold text-white">Crear Cuenta</h2>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Email</label>
                <input type="email" name="email" value={data.email} placeholder="test@example.com" onChange={handleChange}
                className="text-white rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none" />
                {error.email && <span className="text-sm text-red-600">{error.email} </span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="font medium text-white">Password</label>
                <input type="password" name="password" value={data.password} placeholder="******"onChange={handleChange} 
                className="text-white rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus_outline-none"/>
                {error.password && <span>{error.password} </span>}
            </div>
            <div className="flex justify-center">
                <Button />
            </div>
        </form>
    )
}
export {LoginForm}