import { db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

export const getDetailCatalogo = (CatalogoId) => {
  return new Promise((resolve, reject) => {
    const DocRef = doc(db, "catalogo", CatalogoId);
    getDoc(DocRef)
      .then((response) => {
        const catalogoResponse = { id: response.id, ...response.data() };
        resolve(catalogoResponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getDetalleOrden = (ordenId) => {
  return new Promise((resolve, reject) => {
    const OrdenRef = doc(db, "Ordenes", ordenId);
    getDoc(OrdenRef)
      .then((response) => {
        const OrdenResponse = { id: response.id, ...response.data() };
        resolve(OrdenResponse);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
