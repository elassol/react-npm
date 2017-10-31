import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PanelComponent from './components/PanelComponent';



class App extends Component {
    render() {
        return (
            <div>
                <h2>Hello World! Edu</h2>
                <PanelComponent/>
                
            </div>
        )
    }
}
 
ReactDOM.render( <App />, document.querySelector( '#app' ) );