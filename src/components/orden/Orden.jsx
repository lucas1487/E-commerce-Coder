const Orden = ({id, Comprador, Items,total}) => {
    return(
        <div className=" m-auto   bg-green-200  shadow-2xl  flex-wrap w-1/2 font-mono mt-5 border-4 outline-8  border-blue-700 rounded-3xl">
        <div className="flex flex-col justify-center items-center p-3">
            <div className="flex"><p className="font-bold">Número orden: </p><p>{id}</p></div>
            <div className="flex"> <p className="font-bold">Nombre: </p> <p>{Comprador.Nombrecli}</p></div>
            <div className="flex"> <p className="font-bold">Apellido: </p> <p>{Comprador.Apellidocli}</p></div>
            <div className="flex"> <p className="font-bold">Email: </p> <p>{Comprador.Email}</p></div>
            <div className="flex"> <p className="font-bold">Teléfono: </p> <p>{Comprador.Telefono}</p></div>
            <div className="flex"> <p className="font-bold">Total: </p> <p>${total},00.-</p></div>










            <div className=" font-mono text-2xl font-bold text-cyan-700 mt-3 flex flex-col justify-center items-center border-b-4 border-blue-700 text-center ">Detalle Productos</div>
            {Items.map(person =>
                                
                <div className="border-b-4 border-blue-700 text-center" key={person.id}>
                    <p className="datosBoletaOrden">{`Producto: ${person.marca}`}</p>
                    <p className="datosBoletaOrden">{`Cantidad: ${person.cantidad}`}</p>
                    <p className="datosBoletaOrden">{`Precio: $${person.precio},00.-`}</p>

                </div>)}
        </div>
        </div>
    )
}

export default Orden