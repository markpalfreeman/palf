import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import { color, layout, screenSize } from '../styles/variables'

const Body = styled.div`
  .container {
    width: 100%;
    height: 100%;
    margin: auto;

    @media screen and (min-width: ${screenSize.medium}) {
      max-width: ${layout.containerWidth};
    }
  }

  .flex {
    display: flex;
  }

  .flex-even {
    display: flex;
    justify-content: space-between;
  }
`

const Main = styled.main`
  border-bottom: 1px solid ${color.gray};
  padding: 1rem;

  @media screen and (min-width: ${screenSize.large}) {
    padding: 2rem 0;
    margin-left: ${layout.sidebarWidth};
  }
`

function Layout(props) {
  var gaScript = `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-66613452-1', 'auto');
    ga('send', 'pageview');`

  return (
    <Body>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
      <script dangerouslySetInnerHtml={{ __html: gaScript }} />
    </Body>
  )
}

export default Layout
