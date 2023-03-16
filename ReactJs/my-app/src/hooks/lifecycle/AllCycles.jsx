import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("Componente creado");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Actualización del componente");
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalID);
    };
  }, []);

  return <div></div>;
};

export default AllCycles;


/**
 * Cuando el componente aparece se genera un intervalo, y en la actualización se va a pintar y va a haber modificaciones
 *  y cuando el componente desaparece, saldrá tiempo detenido
 */