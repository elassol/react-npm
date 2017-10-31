import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import WrapOptions from './WrapOptions';

 
class PanelComponent extends Component {
    render() {
        return (
            <div className="panel">
              <TitleComponent title="test my fraking title"/>
              <WrapOptions/>
            </div> 
        )
    }
}
 
export default PanelComponent;