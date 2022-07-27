

import { useState,useEffect } from 'react'
import CardList from "./CardList"
import Cargando from './Cargando'





function ItemListContainer() {

  const [cardLista,setListaP] =useState([])
  const [loading, setLoading]=useState(true)


    useEffect(()=>{

        setTimeout(()=>{
          setLoading(false)
          obtenerDatos()

  
    },2000);
      
     
    },[])

    const obtenerDatos= async ()=>{
        const datos= await fetch('../../public/productos.json');
        const prodDatos= await datos.json();
        console.log(prodDatos);
        setListaP(prodDatos)
    }

    return(
      <div className='h-max className="flex justify-center justify-items-center"'>
        {loading? <Cargando/>: <CardList lista={cardLista}/>
}
      </div>
  )
}

export default ItemListContainer
