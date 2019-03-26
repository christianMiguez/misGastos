import React, { Component } from 'react';
import Header from './Header.js';
import Formulario from './Formulario.js';
import Listado from './Listado.js';
import ControlPresupuesto from './ControlPresupuesto';
import '../helpers.js'
import '../css/App.css'
import { validarPresupuesto } from '../helpers.js';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
   this.obtenerPresupuesto()
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿cual es tu presupuesto?')

    let resultado = validarPresupuesto(presupuesto);

    if(resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante : presupuesto
      })
    } else {
      this.obtenerPresupuesto()
    }
  }

// agregar gasto al state
agregarGasto = gasto => {
  // tomar una copia del state
  const gastos = {...this.state.gastos};

  gastos[`gasto${Date.now()}`] = gasto;

  this.restarPresupuesto(gasto.cantidadGasto)

  // agregar gasto al objeto del state
  this.setState({
    gastos
  })

}

// Restar del presupuesto cuando un gasto se crea

restarPresupuesto = cantidad => {
  // leer gasto
    let restar = Number(cantidad);

    let restante = this.state.restante

    restante -= restar;

    restante = String(restante);

    this.setState({
      restante
    })



}



  render() {
    return (
      <div className="App container">
        <Header title="My Expenses"/>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGasto = {this.agregarGasto}/>
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto presupuesto={this.state.presupuesto} restante={this.state.restante}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
