

import { useState,useEffect } from 'react'
import CardList from "./CardList"
import Cargando from './Cargando'
import {useParams} from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../firebase/firebase'




function ItemListContainer() {

  const [cardLista,setListaP] =useState([])
  const [loading, setLoading]=useState(true)
  const {CategoriaId}=useParams()


  useEffect(() =>{
    const coleccionRef = CategoriaId ? (query(collection(db, 'catalogo'), where('categoria','==',CategoriaId))) : (collection(db, 'catalogo'))
    setTimeout(()=>{
    setLoading(false)
    

},2000);
getDocs(coleccionRef).then(response =>{
  const catalogoFirestore = response.docs.map(doc =>{
      return{id:doc.id, ...doc.data()}
  })
  setListaP(catalogoFirestore)
})
   

},[CategoriaId])



      

    return(
      <div className='h-max flex justify-center justify-items-center'>
        {loading? <Cargando/>: <CardList lista={cardLista}/>
}
      </div>
  )
}

export default ItemListContainer
