
import { useContext } from "react";
import {CartContexto} from "./CartContext";
import {Link} from 'react-router-dom'
function CartWidget() {
  const { cantidadTotalCart } = useContext(CartContexto);
  
  return (
    <Link to='/E-commerce-Coder/Cart/'>
    <div className=" flex justify-end">
    <span   className=" flex flex-col justify-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 translate-y-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <p className=" flex justify-center rounded-full shadow-sm bg-green-200 ">{cantidadTotalCart}</p>
    </span>

  </div></Link>
    
  );
}

export default CartWidget;
