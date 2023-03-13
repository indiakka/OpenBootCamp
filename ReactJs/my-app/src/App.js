import "./App.css";
import ComponenteA from "./components/ejercicio 1,2,3/componenteB";
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
        <ComponenteA />
      </header>
    </div>
  );
}

export default App;
