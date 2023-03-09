import React, { Component } from "react";
import PropTypes from 'prop-types';

/*Un componente de clase es una clase de javascript que extiende la clase Component de React. Y necesita setState para actualizar 
la información*/

class Greeting extends Component {
//props información enviada por propiedades o atributos de html
constructor(props){
    super(props)
    //valor privado
    this.state = {
      age: 29
    }
}

  render() {
    return (
      <div>
        <h1>Hola!{this.props.name}</h1>
        <h2> Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }


 birthday = () => {
  //setState hace que se actualice la información del estado, si se cambia
  this.setState( (prevState)  => (
  
    { age: prevState.age +1 }
    )
  )
}
}

Greeting.propTypes = {
name : PropTypes.string
};

export default Greeting;
