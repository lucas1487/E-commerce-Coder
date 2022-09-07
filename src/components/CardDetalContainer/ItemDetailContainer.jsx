import React from "react";
import ItemDetail from "./ItemDetail";
import Cargando from "../cardsList/Cargando";
import { getDetailCatalogo } from "../../firebase/firestone";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CardDetailContainer() {
  const [loading, setLoading] = useState(true);

  const [cardLista, setListaP] = useState([]);
  const { detalleId } = useParams();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    getDetailCatalogo(detalleId)
      .then((response) => {
        setListaP(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  }, [detalleId]);

  return (
    <div className="h-max flex justify-center justify-items-center">
      {loading ? <Cargando /> : <ItemDetail {...cardLista} />}
    </div>
  );
}

export default CardDetailContainer;
