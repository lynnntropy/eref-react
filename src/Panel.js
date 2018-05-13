import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Panel extends Component {
  render () {
    return (
      <div className="panel">
        <div className="panel-title">
          <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        </div>
        <div className="panel-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}