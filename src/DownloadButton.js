import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from "@fortawesome/fontawesome-free-solid/faArrowDown"

export default class DownloadButton extends Component {
  render () {
    return (
      <a href={this.props.url} target="_blank" rel="noopener">
        <div className="panel-item-download">
          <FontAwesomeIcon icon={faArrowDown} size="xs"/> Preuzmi
        </div>
      </a>
    )
  }
}