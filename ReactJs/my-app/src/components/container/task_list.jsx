import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

 /* changeState = (id) => {
    console.log('TODO : cambiar estado de una tarea')
  }*/

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>{" "}
      </div>
      {/* TODO: Aplicar un For/Map para renderizar un a lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;

//tiene una tarea, y pintamos dentro de la lista, el componente tarea y pasamos por props la tarea que queremos que nos pinte
