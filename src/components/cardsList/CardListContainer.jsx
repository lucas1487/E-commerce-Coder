

import { useState,useEffect } from 'react'
import CardList from "./CardList"
import Cargando from './Cargando'
import {getCatalogo, getCategoriaByCategoria} from '../../productos.js'
import {useParams} from 'react-router-dom'





function ItemListContainer() {

  const [cardLista,setListaP] =useState([])
  const [loading, setLoading]=useState(true)
  const {CategoriaId}=useParams()


  useEffect(() =>{
    setTimeout(()=>{
    setLoading(false)
    

},2000);
if(!CategoriaId) {
  getCatalogo().then(respuesta=>{
    setListaP(respuesta)
    console.log(cardLista)

  })
}else{
getCategoriaByCategoria(CategoriaId).then(respuesta=>{
    setListaP(respuesta)
    console.log(cardLista)

  })
}
   

},[CategoriaId])



      

    return(
      <div className='h-max flex justify-center justify-items-center'>
        {loading? <Cargando/>: <CardList lista={cardLista}/>
}
      </div>
  )
}

export default ItemListContainer
