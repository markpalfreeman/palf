import Link from 'next/link'
import styled from 'styled-components'
import { color, layout, screenSize } from '../styles/variables'

const PageHeader = styled.header`
  background-color: ${color.red};
  padding: 0.5rem 1rem;
  position: relative;
  overflow: hidden;
  height: 4rem;

  a {
    text-decoration: none;
    color: ${color.tan};

    &:hover {
      color: ${color.black};
      background: white;
    }
  }

  .logo {
    text-transform: uppercase;
    cursor: pointer;

    &--name {
      margin: 0;
      display: none;
    }

    &--avatar {
      position: absolute;
      mix-blend-mode: multiply;
      border-radius: 50%;
      width: 6rem;
      margin-left: -1.5rem;
      margin-top: -1.2rem;
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
    height: 100%;

    .logo {
      &--name {
        display: none;
      }

      &--avatar {
        position: static;
        width: 280%;
        margin-left: -100%;
        margin-top: -30%;
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
              src="https://secure.gravatar.com/avatar/5e5558cf846c5fc6841cf3720d190783?size=600"
              title="Mark Palfreeman"
            />
          </div>
        </Link>
        <nav className="nav" role="navigation">
          <a
            className="nav__link"
            href="https://medium.com/@markpalfreeman/latest"
            target="blank"
          >
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
