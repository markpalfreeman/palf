import Layout from "../components/Layout"

function Now() {
  return (
    <Layout>
      <div className="container">
        <h1>What I’m Doing Now</h1>
        <h2>🏠 Staying at Home</h2>
        <p>
          I live right in the little town of Snohomish, WA about 25 miles northeast of Seattle. Our family loves walking
          around town—within minutes we can visit shopping, coffee, wineries, parks, or the library. With the
          coronavirus, I'm trying to stay productive in close quarters with a 3- and 1-year old. And maybe get outside
          for some exercise to stay sane and mix up the week.
        </p>
        <p>
          We’re hoping to move south soon, so now it’s go-time searching for a new house in the strangest real estate
          market since the last recession. I’ve rebuilt our front picket fence and plan to declutter (and wait out
          government bans) until we can get our house listed for sale.
        </p>
        <h2>📖 Reading</h2>
        <p>
          I love reading and connecting over books. I’ve been meeting monthly with a small book club (me and two
          friends) to try to finish more books.
        </p>
        <p>I’m currently reading:</p>
        <ul>
          <li>
            <a href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</a> by James Clear
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
          I’m at Microsoft working on a UI library of controls and components for use on the home and store pages of{" "}
          <a href="https://microsoft.com">microsoft.com</a>. It’s been a lesson “back to the basics” writing plain old
          JavaScript, HTML, and CSS, along with a Handlebars documentation site. I’d like to return to React and more
          app-level development again, but spending time with libraries at the lowest level forces me to go deeper on
          the essentials, accessibility, versioning, and other critical considerations of web development.
        </p>
        <small>
          <em>Updated: March 28, 2020</em>
        </small>
      </div>
    </Layout>
  )
}

export default Now
