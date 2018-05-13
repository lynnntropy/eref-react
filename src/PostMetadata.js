import React, { Component } from 'react'
import Moment from 'react-moment'
import 'moment/locale/sr'

export default class PostMetadata extends Component {
  render () {
    return (
      <div className="panel-item-metadata">
        Postavio/la <strong>{this.props.author}</strong> pre <Moment fromNow ago locale="sr">{this.props.publishedDateTime}</Moment>
      </div>
    )
  }
}