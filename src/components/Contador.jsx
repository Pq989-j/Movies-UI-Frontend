import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
    </div>
  );
}

export default Contador;