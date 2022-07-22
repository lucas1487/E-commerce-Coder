import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemListContainer from './ItemListContainer';



function ItemCount() {
    let stock=5
    const [cantidad, setCantidad]=useState(1);
    function incremento(){
      if (cantidad<stock){
         setCantidad(cantidad+1)
      }
    }
    function decremento(){
      if (cantidad>1){
         setCantidad(cantidad-1)
      }
    }
    function mostrar(){
      if (cantidad===1){
        alert(`Agrego ${cantidad} producto al carrito`)

      }else{
        alert(`Agrego ${cantidad} productos al carrito`)

      }
    }
    
  return (

    <div>

      <div className="flex justify-center items-center m-3">
      <button onClick={decremento} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >-</button>

        <p className='ml-5 mr-5 text-lg'> {cantidad}</p>
        <button onClick={incremento} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >+</button>

        </div>
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a onClick={mostrar} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</a>
        </div>

    </div>
  )
}

export default ItemCount
