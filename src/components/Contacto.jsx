import { useNotificacion } from "./Notification";

function Contacto() {
  const setNotificacion = useNotificacion();

  const envioConsulta = () => {
    setNotificacion("succes", `Su consulta fue enviada con exito`);
  };

  return (
    <div className="border-4 outline-8 my-3 border-blue-700 rounded-3xl flex flex-col m-auto items-center justify-center bg-green-200  shadow-2xl  flex-wrap w-1/2 font-mono">
      <div className="flex justify-center flex-col m-4 ">
        <h2 className=" content-center mb-4 font-bold text-lg  ">
          Envie su consulta completando el siguiente formulario
        </h2>
        <input
          type="text"
          placeholder="Nombre"
          className="m-1 border-slate-400 border-solid border-2"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="m-1 border-slate-400 border-solid border-2"
        />
        <input
          type="number"
          placeholder="Número de contacto"
          className="m-1 border-slate-400 border-solid border-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="m-1 border-slate-400 border-solid border-2"
        />
        <textarea
          rows={5}
          type="textarea"
          placeholder="Comentarios"
          className="m-1 border-slate-400 border-solid border-2"
        />
        <input
          type="submit"
          onClick={envioConsulta}
          className="m-2 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          value="Enviar Consulta"
        />
      </div>
    </div>
  );
}

export default Contacto;
