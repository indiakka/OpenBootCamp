import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    descritption = '';
    cinoketed = false;
    level = LEVELS.NORMAL

    constructor(name, description,completed, level ){
        this.name = name;
        this.descritption = description;
        this.completed = completed;
        this.level = level
    }
} 

//tiene una clase de tipo tarea y un constructor con la inicialización de todas las propiedades