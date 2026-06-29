import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL;

function ListaNotas() {
  const [notas, setNotas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch(`${API}/movies`);
        if (!res.ok) throw new Error("No se pudieron cargar las notas");
        setNotas(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) return <p>Cargando notas…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {notas.map((movie) => (
        <li key={movie._id}>{movie.titulo}</li>
      ))}
    </ul>
  );
}

export default ListaNotas;