import React from 'react'
import CardDetail from './CardDetail'
import Cargando from '../cardsList/Cargando'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getCatalogoById} from '../../productos.js'


function CardDetailContainer() {
  const [cardLista,setListaP] =useState([])
 const {detalleId}=useParams()
    useEffect(()=>{

      
          obtenerDatos()
  
    
      
     
    },[detalleId])

    const obtenerDatos=  ()=>{
      getCatalogoById(detalleId).then(respuesta=>{
        setListaP(respuesta)
      }
        )}
        console.log(cardLista)

  return (
    
        <div>
           <CardDetail {...cardLista}/>
        </div>
    
  )
}

export default CardDetailContainer