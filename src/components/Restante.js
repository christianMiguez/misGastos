import React from 'react';
import {revisarPresupuesto} from '../helpers.js';
import PropTypes from 'prop-types';

class Restante extends React.Component {
  render() {
    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;
    return(
      <div className={revisarPresupuesto(presupuesto, restante)}>
        <p>Presupuesto: $ {this.props.restante}</p>
      </div>
    )
  }
}

Restante.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired

}

export default Restante
