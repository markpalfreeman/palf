import Link from 'next/link'
import styled from 'styled-components'
import { color, layout, screenSize } from '../styles/variables'

const PageHeader = styled.header`
  background-color: ${color.yellow};
  padding: 1rem;

  a {
    text-decoration: none;
  }

  .logo {
    text-transform: uppercase;
    cursor: pointer;

    &--name {
      margin: 0;
    }

    &--avatar {
      display: none;
    }
  }

  .nav {
    display: flex;

    &__link {
      align-self: center;

      &:not(:first-of-type) {
        margin-left: 1em;
      }

      &.current-page {
        font-weight: bold;
        box-shadow: 0 2px 0 0 ${color.black};
      }
    }
  }

  @media screen and (min-width: ${screenSize.large}) {
    position: fixed;
    padding: 2rem;
    bottom: 0;
    left: 0;
    top: 0;
    width: ${layout.sidebarWidth};

    .logo {
      &--name {
        display: none;
      }

      &--avatar {
        display: block;
        border-radius: 50%;
      }
    }

    .nav {
      flex-direction: column;
      width: 100%;

      &__link {
        align-self: center;
        margin-top: 1em;

        &:not(:first-of-type) {
          margin-left: 0;
        }
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: space-between;
      height: 100%;
    }
  }
`

function Header() {
  return (
    <PageHeader>
      <div className="container flex-even">
        <Link href="/">
          <div className="logo">
            <h1 className="logo--name">
              <a>Palf</a>
            </h1>
            <img
              className="logo--avatar"
              src="https://pbs.twimg.com/profile_images/622425873006735360/6Yy5Cjwf_400x400.jpg"
              title="Mark Palfreeman"
            />
          </div>
        </Link>
        <nav className="nav" role="navigation">
          <a className="nav__link" href="https://medium.com/@markpalfreeman/latest" target="blank">
            Blog
          </a>
          <Link href="/about">
            {/* active: add class "current-page" */}
            <a className="nav__link">About</a>
          </Link>
        </nav>
      </div>
    </PageHeader>
  )
}

export default Header
