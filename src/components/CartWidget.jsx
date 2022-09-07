import { useContext } from "react";
import { CartContexto } from "./CartContext";
import { Link } from "react-router-dom";
import carritoVacio from "../img/carritoVacio.svg";
import carritoLleno from "../img/carritoLleno.png";

function CartWidget() {
  const { cantidadTotalCart } = useContext(CartContexto);

  return (
    <Link to="/E-commerce-Coder/Cart/">
      {cantidadTotalCart === 0 ? (
        <span className=" flex flex-col justify-center w-8">
          <img src={carritoVacio}></img>
        </span>
      ) : (
        <div className=" flex justify-end">
          <span className=" flex flex-col justify-center w-8">
            <img src={carritoLleno}></img>
            <p className=" flex justify-center rounded-full shadow-sm bg-green-200 ">
              {cantidadTotalCart}
            </p>
          </span>
        </div>
      )}
    </Link>
  );
}

export default CartWidget;
