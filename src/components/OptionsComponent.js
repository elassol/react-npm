import React, { Component } from 'react';

class Optionscomponent extends Component  {
  render () {
    return (
      <a href="{this.props.value}">{this.props.name}</a>
    )
  }
}

export default Optionscomponent;