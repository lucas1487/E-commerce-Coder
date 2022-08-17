import React from 'react'
import CardDetail from './CardDetail'
import Cargando from '../cardsList/Cargando'

import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../firebase/firebase'

function CardDetailContainer() {
  const [loading, setLoading]=useState(true)

  const [cardLista,setListaP] =useState([])
 const {detalleId}=useParams()
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
        
    
    },500)
      
      const DocRef = doc(db, 'catalogo', detalleId)
      getDoc(DocRef).then(response =>{
          const cardListaResponse = {id: response.id, ...response.data()}
          setListaP(cardListaResponse)
      }).catch(error =>{console.log(error)})
  
    
      
     
    },[detalleId])

    

  return (
    
        <div className='h-max flex justify-center justify-items-center'>
         {loading? <Cargando/>  :<CardDetail {...cardLista}/>}
        </div>
    
  )
}

export default CardDetailContainer