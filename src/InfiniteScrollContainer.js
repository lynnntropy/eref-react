import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { RotateLoader } from 'react-spinners'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class InfiniteScrollContainer extends Component {

  render () {

    const listLoader =
      <div className="list-loader">
        <RotateLoader color={'#4CAF50'} size={15} margin="1px" />
      </div>

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.props.loadMore}
        hasMore={true}
        loader={listLoader}
        useWindow={false}>

        <ReactCSSTransitionGroup
          transitionName="list"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {this.props.children}
        </ReactCSSTransitionGroup>

      </InfiniteScroll>
    )
  }
}