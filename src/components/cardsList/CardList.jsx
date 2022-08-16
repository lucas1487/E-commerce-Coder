import React from 'react'
import Card from './Card'
import {memo} from 'react'
function CardList({lista}) {


  return (
    <div className=' grid  md:grid-cols-3'>
        {
               
            
            lista.map((item)=>  <Card key={item.id} id={item.id} marcas={item.marca} precios={item.precio} imagen={item.img} stock={item.stock}/>
            )
        }
        
    </div>
  )
}

export default memo(CardList) 