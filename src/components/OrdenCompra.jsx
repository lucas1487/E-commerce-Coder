import {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getDetalleOrden} from '../firebase/firestone'
import OrdenDetail from './orden/OrdenDetail'
const OrdenCompra = () =>{
    const [orden, setOrden] = useState([])
    const {ordenPage} = useParams()
    const [cargando, setCargando] = useState(true)
    

    useEffect(() => {
        setCargando(true)
        getDetalleOrden(ordenPage).then(response =>{setOrden([response])}).catch(err =>{console.error(err)}).finally(() =>{setCargando(false)})

    },[ordenPage])

    console.log(orden)
    if(cargando){
        return(
            <div className="container"><div className="spin-preloader"></div></div>
        )
}
    
    
        return(
            <>
           {orden.length > 0 ? <OrdenDetail orden={orden}/> : <div>No hay ordenes</div>}
    
            </>
        )
    }
    
    export default OrdenCompra 