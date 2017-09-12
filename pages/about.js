import Link from 'next/link'
import Layout from '../components/Layout'

function About(props) {
  return (
    <Layout>
      <div className="container">
        <h2>I'm Mark.</h2>
        <p>
          I'm a web developer, husband, drummer, entrepreneur, and fan of soccer, music, whiskey,
          and books.
        </p>
        <p>
          I currently work at Concur in Bellevue, WA building new features and reusable components
          in React and Redux, while maintaining and improving a legacy codebase.<br />
          My recent interests are React, Sass, reusable component libraries, and client-side web
          apps.
        </p>
        <p>
          I co-founded the{' '}
          <a href="http://seattlewhiskeycollective.com">Seattle Whiskey Collective</a>, a whiskey
          tasting community that meets monthly to taste American whiskey.
        </p>
        <p>
          Authors that inspire me are <a href="http://sethgodin.typepad.com">Seth Godin</a>,{' '}
          <a href="http://malcolmgladwell.com">Malcolm Gladwell</a>,{' '}
          <a href="http://stevenpressfield.com">Steven Pressfield</a>, and{' '}
          <a href="http://cslewis.com">C.S. Lewis</a>.
        </p>
      </div>
    </Layout>
  )
}

export default About
