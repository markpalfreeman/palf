import Layout from "../components/Layout"

function Now() {
  return (
    <Layout>
      <div className="container">
        <h1>What I’m Doing Now</h1>
        <h2>🏠 We moved!</h2>
        <p>
          After almost 4 years in the small town of Snohomish, we moved our family into a bigger
          house in Lynnwood, halfway closer to Seattle. We've been acclimating the kids, connecting
          with friends, painting, doing large exterior projects, and are now replacing carpet floor.
        </p>
        <p>
          And yet, we'll be home-bound again while the state of Washington attempts to slow the
          spread of COVID-19. It's frustrating that the holidays are going to look different this
          year with all the government restrictions on gatherings, travel, and entertainment, but it
          should yield more family connection and time for home improvement.
        </p>
        <h2>📖 Reading</h2>
        <p>
          I love reading and connecting over books. I’ve been meeting monthly with a small book club
          (me and two friends) to try to finish more books.
        </p>
        <p>I’m currently reading:</p>
        <ul>
          <li>
            <a href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</a>{" "}
            by James Clear
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/43982455-the-ruthless-elimination-of-hurry">
              The Ruthless Elimination of Hurry
            </a>{" "}
            by John Mark Comer
          </li>
        </ul>
        <h2>💻 UI Development </h2>
        <p>
          I’m at Microsoft working on a UI library of controls and components for use on the home
          and store pages of <a href="https://microsoft.com">microsoft.com</a>. It’s been a lesson
          “back to the basics” writing plain old JavaScript, HTML, and CSS, along with a Handlebars
          documentation site. I’d like to return to React and more app-level development again, but
          spending time with libraries at the lowest level forces me to go deeper on the essentials,
          accessibility, versioning, and other critical considerations of web development.
        </p>
        <small>
          <em>Updated: November 16, 2020</em>
        </small>
      </div>
    </Layout>
  )
}

export default Now
