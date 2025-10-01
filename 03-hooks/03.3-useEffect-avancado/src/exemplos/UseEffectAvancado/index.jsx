import { useEffect, useState } from "react";
import { fetchPhoto } from "./api";
import "./styles.css";

// Regra #0 Quando um componente renderiza,
//   deve acontecer de forma previsível. (Sem efeitos colaterais)
// Regra #1 Se um efeito colateral é disparado por um evento,
//   ele deve ser disparado dentro do próprio evento.
// Regra #2 Se um efeito colateral sincroniza o seu componente com algo
//   externo(API/localStorage/DOM), ele deve ser disparado dentro de um useEffect.
export default function ExemploUseEffectAvancado() {
  const [id, setId] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const handleFetchPhoto = async () => {
      setLoading(true);
      setError(null);

      const { error, response } = await fetchPhoto(id);

      if (ignore) return;
      if (error) {
        setError(error.message);
      } else {
        setPhoto(response);
      }

      setLoading(false);
    };

    handleFetchPhoto();

    return () => {
      ignore = true;
    };
  }, [id]);

  const handlePrevious = () => {
    setId(id - 1);
  };

  const handleNext = () => {
    setId(id + 1);
  };

  if (photo === null) return <p>Carregando...</p>;

  console.log({ id, loading, error, photo });

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
