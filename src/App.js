import "./styles.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import DatosJsonContext from "./context/DatosJsonContext";

export default function App() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([]);

  const JsonFotos = async () => {
    const url = await fetch(endpoint);
    let { photos } = await url.json();

    const nuevoArreglo = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      alt: photo.alt,
      like: false,
    }));
    setFotos(nuevoArreglo);
  };

  useEffect(() => {
    JsonFotos();
  }, []);

  return (
    <div className="App">
      <DatosJsonContext.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </DatosJsonContext.Provider>
    </div>
  );
}
