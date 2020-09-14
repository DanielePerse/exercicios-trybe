import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render () {
    const { name, type, weightValue, weightUnit, image} = this.props;

    return (
      <div className="cart">
        <div className="cart-container">
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${weightValue} ${weightUnit}`} </p>
          <img src={image} alt={name}/>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  weightValue: PropTypes.number,
  weightUnit: PropTypes.string,
  image: PropTypes.string
}

export default Pokemon
