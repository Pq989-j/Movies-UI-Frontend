import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailValido = email.includes("@");
    const navigate = useNavigate();
    const login = () => {
        if (!emailValido) return;

        
        goBack();
    };
    return (
        <div>
            <label>Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {!emailValido && email && (
                <p style={{ color: "red" }}>
                Email no válido
                </p>
            )}

            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login}>
            Login
            </button>
            <button onClick={() => navigate("/")}>Volver</button>

        </div>
    );
}

export {Register}