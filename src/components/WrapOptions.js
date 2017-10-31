import React, { Component } from 'react';
import Optionscomponent from './Optionscomponent';

class WrapOptions extends React.Component {
  render() {
    return (
      <div className="wrapper-content">
        <Optionscomponent value="test1" name="Test 1" />
        <Optionscomponent value="test2" name="Test 2" />
        <Optionscomponent value="test3" name="Test 3" />
        <Optionscomponent value="test4" name="Test 4" />
      </div>
    ) 
  }
}

export default WrapOptions;