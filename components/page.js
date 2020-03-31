import React, {Component} from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'

class Page extends Component {
  render () {
    const title = this.props.title === undefined ? "Zoom In" : `Zoom In — ${this.props.title}`
    return <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Section>
        {this.props.children}
      </Section>
      <Footer />
    </div>
  }
}

export default Page
