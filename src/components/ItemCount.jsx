import React from "react";
import { useState, useContext, useEffect } from "react";
import { CartContexto } from "./CartContext";

function ItemCount({ stock, agrega, id }) {
  const [cantidad, setCantidad] = useState(1);
  const [controlStock, setControlStock] = useState(0);
  const { cart } = useContext(CartContexto);

  useEffect(() => {
    if (cart.find((item) => item.id === id)) {
      const producto = cart.find((item) => item.id === id);
      setControlStock(stock - producto.cantidad);
    } else {
      setControlStock(stock);
    }
  }, [stock, cart]);

  const cambiarStock = () => {
    if (controlStock > 0) {
      setControlStock(stock - cantidad);
      agrega(cantidad);
      setCantidad(0);
    }
  };

  function incremento() {
    if (cantidad < controlStock) {
      setCantidad(cantidad + 1);
    }
  }
  function decremento() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div>
      {controlStock === 0 ? (
        <p className="mt-2 text-cyan-100 bg-blue-500 text-xl px-2.5 py-1.5 text-center">
          SIN STOCK
        </p>
      ) : (
        <div>
          <p className="mt-2 text-white bg-blue-500 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Cantidad en stock {controlStock}
          </p>

          <div className="flex justify-center items-center m-3">
            <button
              onClick={decremento}
              className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              -
            </button>

            <p className="ml-5 mr-5 text-lg"> {cantidad}</p>
            <button
              onClick={incremento}
              className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              +
            </button>
            <a
              onClick={cambiarStock}
              className="m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
            >
              Agregar al carrito
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCount;
