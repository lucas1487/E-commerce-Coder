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
  const buscaProducto = (productoParaBuscar) =>{
    const productoEncontrado = cart.find(response => response.id === productoParaBuscar)
    let avisoProductoEncontrado = ''
    if(productoEncontrado){avisoProductoEncontrado = 'Producto ya está Agregado'}else{avisoProductoEncontrado='Agregar Producto'}
    return avisoProductoEncontrado
}
const obtenerTotal = () =>{
  let totalCart = 0
  cart.forEach(response =>{totalCart += response.cantidad * response.precio})
  console.log(totalCart)
  return totalCart
}

const limpiarCarro = () =>{
  setCart([])
}

  return (
    <CartContexto.Provider
      value={{cart ,agregaProducto, eliminProducto, obtenerCartCantidad, buscaProducto,obtenerTotal,limpiarCarro}}
    >
      {children}
    </CartContexto.Provider>
  );
};

export default CartContexto;
