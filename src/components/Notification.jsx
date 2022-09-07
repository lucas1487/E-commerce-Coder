import { useState, createContext, useContext } from "react";
import Swal from "sweetalert2";

const Notificacion = ({ mensaje }) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${mensaje}`,
    showConfirmButton: false,
    timer: 3000,
  });
};

const NotificacionContext = createContext();

export const NotificacionProvider = ({ children }) => {
  const [msnConfig, setMsgConfig] = useState({
    severidad: "succes",
    mensaje: "",
  });

  const setNotificacion = (sev, msn, tiempo) => {
    setMsgConfig({ severidad: sev, mensaje: msn });
    setTimeout(() => {
      setMsgConfig({ ...msnConfig, mensaje: "" });
    }, tiempo * 5000);
  };

  return (
    <NotificacionContext.Provider value={setNotificacion}>
      {msnConfig.mensaje !== "" && (
        <Notificacion
          mensaje={msnConfig.mensaje}
          severidad={msnConfig.severidad}
        />
      )}
      {children}
    </NotificacionContext.Provider>
  );
};

export const useNotificacion = () => {
  return useContext(NotificacionContext);
};
