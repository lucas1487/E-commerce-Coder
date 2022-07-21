import React from 'react'
import { useState } from 'react'



function ItemCount() {
    let stock=5
    const [cantidad, setCantidad]=useState(0);
  return (

    <div>
      <div className="flex justify-center items-center m-3">
      <button onClick={()=>{ cantidad>0? setCantidad(cantidad-1): cantidad}} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >-</button>

        <p className='ml-5 mr-5 text-lg'> {cantidad}</p>
        <button onClick={()=>{ cantidad<stock? setCantidad(cantidad+1): cantidad}} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >+</button>

        </div>
    </div>
  )
}

export default ItemCount
