import Orden from "./Orden"

const OrdenDetail = ({orden}) => {
    return(
        <>
        {orden.map(orden =><Orden key={orden.id}{...orden}/>)}
        </>
    )
}

export default OrdenDetail 