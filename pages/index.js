import Layout from "../components/Layout"
import styled from "styled-components"
import {layout, screenSize} from "../styles/variables"

function Index(props) {
  return (
    <Layout>
      <div className="container">
        <h2>I'm Mark.</h2>
        <p>I'm a UI engineer in the Seattle area building modern, maintainable user experiences on the web.</p>
        <p>I'm also an advocate for people-first company culture, remote work, and constant learning.</p>
        <hr />
        <p>
          This site is a constant work in progress, and the code is public on my{" "}
          <a href="https://github.com/markpalfreeman">GitHub</a>.
        </p>
        <p>
          Feel free to reach me on Twitter at <a href="https://twitter.com/markpalfreeman">@markpalfreeman</a> or by
          email at <a href="mailto:mark@palf.co">mark@palf.co</a>.
        </p>
      </div>
    </Layout>
  )
}

export default Index
