function PersonajeCard({ personaje }) {
  return (
    <article className="card">
      <img
        className="card-img"
        src={personaje.image}
        alt={personaje.name}
      />
      <div className="card-body">
        <h2 className="card-name">{personaje.name}</h2>
        <p><strong>Especie:</strong> {personaje.species}</p>
        <p><strong>Estado:</strong> {personaje.status}</p>
        <p><strong>Género:</strong> {personaje.gender}</p>
      </div>
    </article>
  );
}

export default PersonajeCard;