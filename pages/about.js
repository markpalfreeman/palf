import Layout from "../components/Layout"

function About() {
  return (
    <Layout>
      <div className="container">
        <h2>Hi 👋</h2>
        <p>
          Aside from being a web developer, I'm a husband, dad, drummer, entrepreneur, and fan of soccer, music,
          whiskey, and <a href="https://www.goodreads.com/user/show/50671406-mark-palfreeman">books</a>. I like to get
          outside, enjoy the Pacific Northwest, and snowboard too.
        </p>
        <p>
          I work at <a href="https://microsoft.com">Microsoft</a> in Redmond, WA on a UI engineering team supporting
          store experiences.
        </p>
        <p>
          I co-founded the <a href="http://seattlewhiskeycollective.com">Seattle Whiskey Collective</a>, a whiskey
          tasting community that meets monthly to taste American (and other) whiskey with a fun group of fans.
        </p>
        <p>
          Authors that inspire me are <a href="https://seths.blog">Seth Godin</a>,{" "}
          <a href="https://brenebrown.com">Brené Brown</a>, <a href="https://startwithwhy.com">Simon Sinek</a>,{" "}
          <a href="https://twitter.com/gladwell">Malcolm Gladwell</a>, <a href="http://cslewis.com">C.S. Lewis</a>, and
          more.
        </p>
      </div>
    </Layout>
  )
}

export default About
