import * as React from "react"

const NavBar: React.FunctionComponent = () => (
  <nav className="nav-main">
    <a href="/" className="nav-logo"><img src="/nav-logo.svg" /></a>
    <a href="/wallet" className="btn desktop">CLAIM A TOKEN</a>
    <a href="/" className="btn mobile">CLAIM TOKEN</a>
  </nav>
)

export default NavBar