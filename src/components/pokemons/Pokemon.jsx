export function Pokemon({ pokemon }) {
    return (
      <div style={{ marginBottom: "1em" }}>
        <img src={pokemon.image} alt={pokemon.name} style={{ width: "100px" }} />
        <p>{pokemon.name}</p>
      </div>
    );
  }