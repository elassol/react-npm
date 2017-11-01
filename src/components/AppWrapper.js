import React, {Component} from 'react';
import PanelComponent from './PanelComponent';

class AppWrapper extends React.Component {
  render () {
    return(
      <section className="giftfinder_module module clearfix">
        <div id="background-giftmatcher">
          <div className="wrapper-giftmatcher">

            <PanelComponent id="recipient"/>

          </div>
        </div>
      </section>
    )
  }
}

export default AppWrapper;
