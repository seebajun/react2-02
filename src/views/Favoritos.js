import { useContext } from "react";
import DatosJsonContext from "../context/DatosJsonContext.jsx";
import Heart from "../components/Heart.js";
import "../assets/css/galeria.css";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(DatosJsonContext);

  const setNoFavorito = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);
    const updatedFotos = [...fotos]; // Crear una copia del array fotos
    updatedFotos[fotoIndex].like = !updatedFotos[fotoIndex].like;
    setFotos(updatedFotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        {fotos
          .filter((filter) => filter.like)
          .map((foto) => (
            <div
              className="foto"
              onClick={() => setNoFavorito(foto.id)}
              style={{ backgroundImage: `url(${foto.src})` }}
              key={foto.id}
            >
              <Heart filled={foto.like} />
            </div>
          ))}
      </div>
    </div>
  );
}
