import {CartContexto} from './CartContext'
import ItemCart from './ItemCart'
import {Link} from 'react-router-dom'
import { useContext} from 'react'

function CarListContainer() {
    const {cart, obtenerTotal, limpiarCarro,cantidadTotalCart} = useContext(CartContexto)
    const total = obtenerTotal()
    const handleElimItem = () =>{
        limpiarCarro()}
     
  return (
    <div className='mb-2 font-mono'>
       <>
       <div className='flex w-10000 justify-end mr-10 '>
       <Link to='/E-commerce-Coder/' className=" flex mt-10 w-1/6 justify-center  text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  sm:text-xl sm:flex-col">Seguir Comprando </Link>
       </div>
       
        <div className=" text-2xl font-bold text-white text-center">Carrito de Compras</div>
        <h2 className=" my-5 text-xl font-bold text-white text-center">Productos agregados</h2>
        {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>) : <div className="text-white">No tiene productos agregados</div>}
        {cart.length != '' ? 
        <div className="flex flex-col justify-center">
        <button className=" m-auto mb-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleElimItem}  ><ion-icon name="trash-outline"></ion-icon>Eliminar Carrito</button>
        

          <div className=" border-4 outline-8 m-3 border-blue-700 rounded-3xl   p-2 flex flex-col flex-wrap justify-around items-center content-center font-mono  bg-green-200 shadow sm:w-1/2 sm:m-auto">
            <div className="text-2xl font-bold text-cyan-700">Resumen de Compra</div>
            {cantidadTotalCart!=1?<div className="">Total Productos: {cantidadTotalCart}</div>:<div className="">Total Producto: {cantidadTotalCart}</div>}
            <div className="">Total:  ${total},00.-</div>
            <Link to='/E-commerce-Coder/Cart/Generarcompra/' className="m-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Procesar Compra</Link>

          </div>
        </div> : null}
        
        </>
    </div>
  )
}

export default CarListContainer
