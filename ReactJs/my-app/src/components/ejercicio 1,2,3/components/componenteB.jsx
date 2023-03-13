import ComponenteA from "./componenteA";
import { Contacto } from "./contacto.class";

const ComponenteB = () => {
  const defaultContacto = new Contacto("Maria", "Real", "mare@email.com", true);

  return (
    <div>
      <div>
        <h1>Tus datos: </h1>{" "}
      </div>
      <ComponenteA contacto={defaultContacto}></ComponenteA>
    </div>
  );
};

export default ComponenteB;
