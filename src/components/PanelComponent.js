import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import WrapOptions from './WrapOptions';


class PanelComponent extends Component {
    render() {
        return (
            <div className="panel" id={this.props.id}>

              <TitleComponent title="custom title recipient panel"/>
              <WrapOptions/>
              <div class="panel-footer only_desktop">
                <span class="logo"></span>
              </div>
            </div>
        )
    }
}

export default PanelComponent;
