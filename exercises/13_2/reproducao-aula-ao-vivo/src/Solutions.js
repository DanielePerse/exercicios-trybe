import React from 'react';

class Solutions extends React.Component {
  render () {
    const { solutions } = this.props

    return (
      <div>{solutions.map((solution, index) => <p key={index}>{solution}</p>)}</div>
    )
  }
}

export default Solutions;