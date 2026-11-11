import { useState, useEffect } from "react";
import PersonajeCard from "./components/PersonajeCard";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!respuesta.ok) {
          throw new Error("Error al consultar la API");
        }
        const datos = await respuesta.json();
        setPersonajes(datos.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPersonajes();
  }, []);

  if (cargando) return <p className="mensaje">Cargando personajes...</p>;
  if (error) return <p className="mensaje">Error: {error}</p>;

  return (
    <main className="contenedor">
      <h1 className="titulo">Rick and Morty</h1>
      <section className="grid">
        {personajes.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </section>
    </main>
  );
}

export default App;