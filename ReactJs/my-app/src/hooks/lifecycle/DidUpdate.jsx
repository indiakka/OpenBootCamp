/**
 * Ejemplo de uso de método comenteDidUpdate en componente de clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento antes de que el componente recibe nuevos props o cambio en su estado privado"
    );
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdatedHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente recibe nuevos props o cambio en su estado privado"
    );
  }); // quitamos el corchete para que no haya limite de veces que se repita

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
