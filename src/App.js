import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import Navbar from './Navbar'
import Panel from './Panel'
import PostMetadata from './PostMetadata'
import DownloadButton from './DownloadButton'
import InfiniteScrollContainer from './InfiniteScrollContainer'

import faNewspaper from '@fortawesome/fontawesome-free-solid/faNewspaper'
import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar'
import faFileAlt from '@fortawesome/fontawesome-free-solid/faFileAlt'

class App extends Component {

  state = {
    news: [],
    results: [],
    examples: []
  }

  constructor(props) {
    super(props)

    this.fetchNews = this.fetchNews.bind(this)
    this.fetchResults = this.fetchResults.bind(this)
    this.fetchExamples = this.fetchExamples.bind(this)
  }

  fetchNews (page) {
    axios.get(`/eboard/news/${page}`).then(({ data }) => {
      this.setState({ news: [...this.state.news,  ...data] })
    })
  }

  fetchResults (page) {
    axios.get(`/eboard/results/${page}`).then(({ data }) => {
      this.setState({ results: [...this.state.results,  ...data] })
    })
  }

  fetchExamples (page) {
    axios.get(`/eboard/examples/${page}`).then(({ data }) => {
      this.setState({ examples: [...this.state.examples,  ...data] })
    })
  }

  render() {

    const newsList = this.state.news.map(item =>
      <div className="panel-item">
        <PostMetadata author={item.author} publishedDateTime={item.publishedDateTime} />
        <div className="panel-item-title">
          {item.title}
        </div>
        <div className="panel-item-body"
             dangerouslySetInnerHTML={{__html: item.bodyHtml}}></div>
        {item.subjects &&
          <div className="panel-subjects">
            {item.subjects.map(subject => <span className="subject-tag">{subject}</span>)}
          </div>
        }
      </div>
    )

    const resultsList = this.state.results.map(item =>
      <div className="panel-item">
        <PostMetadata author={item.author} publishedDateTime={item.publishedDateTime} />
        <div className="panel-item-title">
          {item.title}
        </div>
        <div className="panel-item-body"
             dangerouslySetInnerHTML={{__html: item.bodyHtml}}></div>
        <div className="panel-subjects">
          <span className="subject-tag">{item.subject}</span>
        </div>

        {item.fileUrl && <DownloadButton url={item.fileUrl}/>}
      </div>
    )

    const examplesList = this.state.examples.map(item =>
      <div className="panel-item">
        <PostMetadata author={item.author} publishedDateTime={item.publishedDateTime} />
        <div className="panel-item-title">
          {item.filename}
        </div>
        <div className="panel-subjects">
          <span className="subject-tag">{item.subject}</span>
        </div>

        {item.fileUrl && <DownloadButton url={item.fileUrl}/>}
      </div>
    )

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Panel title="Vesti" icon={faNewspaper}>
            <InfiniteScrollContainer loadMore={this.fetchNews}>
              {newsList}
            </InfiniteScrollContainer>
          </Panel>
          <Panel title="Rezultati" icon={faChartBar}>
            <InfiniteScrollContainer loadMore={this.fetchResults}>
              {resultsList}
            </InfiniteScrollContainer>
          </Panel>
          <Panel title="Klišei" icon={faFileAlt}>
            <InfiniteScrollContainer loadMore={this.fetchExamples}>
              {examplesList}
            </InfiniteScrollContainer>
          </Panel>
        </div>
      </div>
    );
  }
}

export default App;
