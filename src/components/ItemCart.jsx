import {useContext} from 'react'
import {CartContexto} from './CartContext'
function ItemCart({id, marca, precio, cantidad}) {
    const {eliminProducto} = useContext(CartContexto)

    const handleElimItem = () =>{
        eliminProducto(id)}
        
  return (
    <div>
      <div className="">
            <div className="m-5 rounded-md p-2 flex flex-row flex-wrap justify-around items-center content-center font-mono  bg-green-200 shadow">
                <div className="text-xl font-bold text-cyan-700  ">{marca}</div>
                <div className="flex"> <p className="text-xl font-bold text-cyan-700">Precio:  </p> <p className='text-xl font-bold '> ${precio},00.-</p></div>
                <div className="flex"> <p className="text-xl font-bold text-cyan-700">Cantidad: </p> <p className='text-xl font-bold'> {cantidad}</p></div>
                <div className="flex"> <p className="text-xl font-bold text-cyan-700">SubTotal:   </p>  <p className='text-xl font-bold'> ${cantidad * precio},00.-</p></div>

                
                <button className="m-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleElimItem} ><ion-icon name="trash-outline"></ion-icon>Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCart
