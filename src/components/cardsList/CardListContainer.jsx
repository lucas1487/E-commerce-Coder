

import { useState,useEffect } from 'react'
import CardList from "./CardList"
import Cargando from './Cargando'
import {getCatalogo} from '../../productos.js'





function ItemListContainer() {

  const [cardLista,setListaP] =useState([])
  const [loading, setLoading]=useState(true)


    useEffect(()=>{

        setTimeout(()=>{
          setLoading(false)
          obtenerDatos()
  
    },2000);
      
     
    },[])

    const obtenerDatos=  ()=>{
      getCatalogo().then(respuesta=>{
        setListaP(respuesta)})}
        console.log(cardLista)

    return(
      <div className='h-max flex justify-center justify-items-center'>
        {loading? <Cargando/>: <CardList lista={cardLista}/>
}
      </div>
  )
}

export default ItemListContainer
