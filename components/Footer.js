import styled from 'styled-components'
import { color, layout, screenSize } from '../styles/variables'

const PageFooter = styled.footer`
  font-size: 0.65em;
  padding: 1rem;
  color: ${color.gray};

  p {
    margin: 0;
  }

  @media screen and (min-width: ${screenSize.large}) {
    padding: 2rem 0;
    margin-left: ${layout.sidebarWidth};
  }
`

function Footer() {
  const year = new Date().getFullYear()

  return (
    <PageFooter>
      <div className="container flex-even">
        <div className="copyright">
          <p>&copy; {year} Mark Palfreeman</p>
        </div>
      </div>
    </PageFooter>
  )
}

export default Footer
