import { useState, createContext, useEffect } from "react";

export const CartContexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotalCart, setcantidadTotalCart] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart") === null || undefined) {
      setCart([]);
      setcantidadTotalCart(0);
    } else {
      setCart(JSON.parse(localStorage.getItem("cart")));
      setcantidadTotalCart(
        obtenerCartCantidad(JSON.parse(localStorage.getItem("cart")))
      );
    }
  }, [cart.length]);

  const agregaProducto = (item) => {
    if (isInCart(item.id)) {
      cart.find((e) => e.id === item.id).cantidad += item.cantidad;
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      setcantidadTotalCart(obtenerCartCantidad(cart));
    } else {
      const newItem = item;
      newItem.cantidad = item.cantidad;
      cart.push(newItem);
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      setcantidadTotalCart(obtenerCartCantidad(cart));
    }
  };
  const isInCart = (id) => {
    if (cart.find((item) => item.id === id) === undefined) {
      return false;
    } else {
      return true;
    }
  };

  const obtenerCartCantidad = (arr) => {
    return arr.reduce((sum, item) => sum + item.cantidad, 0);
  };

  const eliminProducto = (productoParaEliminar) => {
    const carSinProducto = cart.filter(
      (response) => response.id !== productoParaEliminar
    );
    setcantidadTotalCart(obtenerCartCantidad(carSinProducto));

    setCart(carSinProducto);
    localStorage.setItem("cart", JSON.stringify(carSinProducto));
  };

  const obtenerTotal = () => {
    let totalCart = 0;
    cart.forEach((response) => {
      totalCart += response.cantidad * response.precio;
    });
    return totalCart;
  };

  const limpiarCarro = () => {
    setCart([]);
    setcantidadTotalCart(0);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContexto.Provider
      value={{
        cantidadTotalCart,
        cart,
        agregaProducto,
        eliminProducto,
        obtenerCartCantidad,
        obtenerTotal,
        limpiarCarro,
      }}
    >
      {children}
    </CartContexto.Provider>
  );
};

export default CartContext;
