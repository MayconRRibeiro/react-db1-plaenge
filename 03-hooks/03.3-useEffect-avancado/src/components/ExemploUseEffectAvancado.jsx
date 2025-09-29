import { useEffect, useState } from "react";
import "./ExemploUseEffectAvancado.css";
import { fetchPhoto } from "./api";

export default function ExemploUseEffectAvancado() {
  const [id, setId] = useState(1);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const handleFetchPhoto = async () => {
      const { response } = await fetchPhoto(id);
      setPhoto(response);
    };

    handleFetchPhoto();
  }, [id]);

  const handlePrevious = () => {
    setId(id - 1);
  };

  const handleNext = () => {
    setId(id + 1);
  };

  if (photo === null) return <p>Carregando...</p>;

  return (
    <div className="container">
      <div className="navigation">
        <button onClick={handlePrevious} disabled={id <= 1}>
          Anterior
        </button>
        <span>Foto ID: {id}</span>
        <button onClick={handleNext}>Próximo</button>
      </div>

      <div className="photo-container">
        <img
          src={photo.download_url}
          alt={`Foto por ${photo.author}`}
          className="photo"
        />
      </div>
      
      <div className="photo-info">
        <p>Autor: {photo.author}</p>
        <p>
          Dimensões: {photo.width} x {photo.height}
        </p>
      </div>
    </div>
  );
}
