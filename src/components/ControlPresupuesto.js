import React from 'react'
import Presupuesto from './Presupuesto.js'
import Restante from './Restante.js'
import PropTypes from 'prop-types';


class ControlPresupuesto extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Presupuesto presupuesto={this.props.presupuesto}/>
        <Restante presupuesto={this.props.presupuesto} restante={this.props.restante}/>
      </React.Fragment>
    )
  }
}

//asegura que se le pasen los valores correctos
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired

}
export default ControlPresupuesto
