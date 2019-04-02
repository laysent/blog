import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children, subtitle } = this.props
    const blogRootPath = `${__PATH_PREFIX__}/blog`
    let header

    if (location.pathname === blogRootPath) {
      header = (
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </header>
      )
    } else {
      header = (
        <nav>
          <h3
            style={{
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog`}
            >
              {title}
            </Link>
          </h3>
        </nav>
      )
    }
    return (
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        itemScope
        itemType="http://schema.org/Blog"
      >
        {header}
        {subtitle && (
          <header>
            <h1
              style={{
                boxShadow: `none`,
                textDecoration: `underline`,
              }}
            >
              {subtitle}
            </h1>
          </header>
        )}
        {children}
        <footer>
          <span>© </span>
          <span itemProp="copyrightYear">{new Date().getFullYear()}</span>
          <span> </span>
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name">LaySent</span>
          </span>
        </footer>
      </main>
    )
  }
}

export default Layout
