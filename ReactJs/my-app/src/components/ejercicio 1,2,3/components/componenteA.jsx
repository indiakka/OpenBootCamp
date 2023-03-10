import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const ComponenteA = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellido: {contacto.apellido}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>
        Conectado:{" "}
        {contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h5>
    </div>
  );
};

ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteA;
