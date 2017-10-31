import React, { Component } from 'react';

class TitleComponent extends React.Component {
    render() {
        return (
            <div className="giftmatcher-nav">
                <span className="back"></span>
                <h2 className="ttl"> {this.props.title} </h2>
                <span className="close only_mob">×</span>
            </div>
        )
    }
}
export default TitleComponent;