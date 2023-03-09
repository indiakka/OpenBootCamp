import React, { useState } from "react";
import PropTypes from "prop-types";

/*
Un componente funcional es una función que recibe el objeto Props y retorna un ReactNode (un ReactNode puede ser un elemento html,
un string, un booleano, entre otros tipos de datos.). Más facil de usa que el de clases.
*/

const GreetingF = (props) => {
  //Breve introducción a useState
  //const [variable, método para actualizarlo ]= useState(valor inicial)
  const [age, setage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1>Hola!{props.name} desde componente funcional!</h1>
      <h2> Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
