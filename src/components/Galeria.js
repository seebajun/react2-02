import { useContext, useEffect } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import DatosJsonContext from "../context/DatosJsonContext.jsx";

export default function Galeria() {

  const { fotos, setFotos } = useContext(DatosJsonContext);

  useEffect(() => {
  }, []);

  const setFavorito = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);
    fotos[fotoIndex].like = !fotos[fotoIndex].like;
    setFotos([...fotos]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((f) => (
        <div
          onClick={() => setFavorito(f.id)}
          className="foto"
          style={{ backgroundImage: `url(${f.src})` }}
          key={f.id}> 
          <Heart filled={f.like} />
          <p>{f.alt}</p>
        </div>
      ))}
    </div>
  );
}
