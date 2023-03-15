import "./App.css";
//import ComponenteA from "./components/ejercicio 1,2,3/componenteB";
//import Ejemplo1 from "./hooks/Ejemplo1";
//import Ejemplo2 from "./hooks/Ejemplo2";
//import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
//import TaskListComponent from "./components/container/task_list";
//import Greeting from "./components/pure/greeting";
//import GreetingF from "./components/pure/greetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente propio Gretting.jsx */}
        {/* <Greeting name={"Martin"} /> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name={"Martin"} /> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent /> */}
        {/* <ComponenteA /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1 /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        <Ejemplo4 nombre='Martin'>
        {/* Todo lo que hay aquí, es trasladado como props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
