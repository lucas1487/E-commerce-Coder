import { useState } from "react";
import { useForm } from "react-hook-form";
import { CartContexto } from "./CartContext";

import Cargando from "./cardsList/Cargando";
import { useNotificacion } from "./Notification";
import { useContext } from "react";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const CartFormCli = () => {
  const { cart, obtenerTotal, cantidadTotalCart, limpiarCarro } =
    useContext(CartContexto);
  const { register, handleSubmit } = useForm();
  const [dato, setDato] = useState([]);
  const total = obtenerTotal();
  const setNotificacion = useNotificacion();
  const [cargando, setCargando] = useState(true);

  const ordenPage = useNavigate();

  const handleInputChange = (event) => {
    setDato({
      ...dato,
      [event.target.name]: event.target.value,
    });
  };

  const limpiarDato = () => {
    setDato([]);
  };

  const generarOrden = () => {
    setCargando(true);
    const listaOrden = {
      Comprador: {
        Nombrecli: dato.Nombre,
        Apellidocli: dato.Apellido,
        Telefono: parseInt(dato.Telefono),
        Email: dato.Email,
      },
      Items: cart,
      total: total,
    };

    const lote = writeBatch(db);
    const sinStock = [];
    const idsReque = cart.map((response) => response.id); ///solo devuelve un campo de cart, en este caso id
    const coleccionCatalogo = collection(db, "catalogo");

    getDocs(query(coleccionCatalogo, where(documentId(), "in", idsReque)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const cartData = cart.find((car) => car.id === doc.id); ///find devuelve todo lo que coincida con ID
          const cartDataCant = cartData.cantidad;

          if (dataDoc.stock >= cartDataCant) {
            lote.update(doc.ref, { stock: dataDoc.stock - cartDataCant });
          } else {
            sinStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (sinStock.length === 0) {
          const coleccionRef = collection(db, "Ordenes");
          return addDoc(coleccionRef, listaOrden);
        } else {
          return Promise.reject({ type: "Sin_Stock", productos: sinStock });
        }
      })
      .then(({ id }) => {
        lote.commit();
        limpiarCarro();
        limpiarDato();
        setNotificacion("succes", `Se generó su orden,ID ${id}`, 2);
        ordenPage(`/E-commerce-Coder/Cart/OrdenCompra/${id}`);
      })
      .catch((error) => {
        if (error.type === "Sin_Stock") {
          setNotificacion("error", `Producto sin Stock`, 3);
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setCargando(false);
      });
  };
  setTimeout(() => {
    setCargando(false);
  }, 1000);
  if (cargando) {
    return <Cargando />;
  }
  return (
    <>
      {cart.length != "" ? (
        <form onSubmit={handleSubmit(generarOrden)}>
          <div className="border-4 outline-8 mt-3 border-blue-700 rounded-3xl flex flex-col m-auto items-center justify-center bg-green-200  shadow-2xl  flex-wrap w-1/2 font-mono">
            <div
              className="flex justify-center flex-col m-4 "
              onChange={handleInputChange}
            >
              <h2 className=" content-center ">
                Registrar datos para la completar la orden
              </h2>
              <input
                type="text"
                placeholder="Nombre"
                className="m-1 border-slate-400 border-solid border-2"
                {...register("Nombre", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <input
                type="text"
                placeholder="Apellido"
                className="m-1 border-slate-400 border-solid border-2"
                {...register("Apellido", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <input
                type="number"
                placeholder="Número de contacto"
                className="m-1 border-slate-400 border-solid border-2"
                {...register("Telefono", {
                  required: true,
                  minLength: 9,
                  maxLength: 11,
                })}
              />
              <input
                type="email"
                placeholder="Email"
                className="m-1 border-slate-400 border-solid border-2"
                {...register("Email", { required: true, maxLength: 30 })}
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-cyan-700">
                Resumen de Compra
              </p>
              <p className="">Total Productos:{cantidadTotalCart}</p>
              <p className="">Total: ${total},00.-</p>
              <input
                type="submit"
                className="m-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Finalizar Compra"
              />
            </div>
          </div>
          <div className="flex flex-col my-4 m-auto items-center justify-around bg-green-200  shadow-2xl  flex-wrap w-1/2 font-mono border-4 outline-8 mt-3 border-blue-700 rounded-3xl">
            <div className="text-2xl font-bold text-cyan-700">
              Datos productos
            </div>
            {cart.map((response) => (
              <ul
                className="border-b-4 border-green-300 text-center "
                key={response.id}
              >
                <li className="text-xl font-bold">{response.marca}</li>
                {response.cantidad === 1 ? (
                  <li>{response.cantidad} Unidad</li>
                ) : (
                  <li>{response.cantidad} Unidades</li>
                )}
                <li>Total: ${response.precio * response.cantidad},00.-</li>
              </ul>
            ))}
          </div>
        </form>
      ) : null}
    </>
  );
};

export default CartFormCli;
