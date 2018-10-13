import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { layout, screenSize } from '../styles/variables'

function Index(props) {
  return (
    <Layout>
      <div className="container">
        <h2>
          I'm Mark.
        </h2>
        <p>
          I'm a front-end web developer in Seattle passionate about creating user-first experiences
          with concise, modular, semantic code in the presentation layer.
        </p>
        <p>
          I'm also an advocate for people-first, collaborative company culture, remote work, and
          constant learning.
        </p>
        <hr />
        <p>
          This site is a constant work in progress as I learn new things, and the code is public on
          my <a href="https://github.com/markpalfreeman">Github</a>.
        </p>
        <p>
          Reach me on Twitter at <a href="https://twitter.com/markpalfreeman">@markpalfreeman</a> or
          by email at <a href="mailto:mark@palf.co">mark@palf.co</a>.
        </p>
      </div>
    </Layout>
  )
}

export default Index
