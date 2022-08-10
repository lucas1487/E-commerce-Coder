import { useState, createContext } from "react";

const CartContexto = createContext();

export const CarProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const agregaProducto = (productoParaAgregar) => {
    if (!cart.some((response) => response.id === productoParaAgregar.id)) {
      setCart([...cart, productoParaAgregar]);
    }
  };

  const eliminProducto = (productoParaEliminar) => {
    const carSinProducto = cart.filter(
      (response) => response.id !== productoParaEliminar
    );
    setCart(carSinProducto);
  };


  const obtenerCartCantidad = () => {
    let cantidadTotalCart = 0;
    cart.forEach((response) => {
      cantidadTotalCart += response.cantidad;
    });

    return cantidadTotalCart;
  };

  return (
    <CartContexto.Provider
      value={{ agregaProducto, eliminProducto, obtenerCartCantidad }}
    >
      {children}
    </CartContexto.Provider>
  );
};

export default CartContexto;
