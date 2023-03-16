/**
 * Ejemplo de uso de método comenteWillUnmount en componente de clase y uso de hook en componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    // aquí no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
};
