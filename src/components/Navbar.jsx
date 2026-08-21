import './Navbar.css'

function Navbar() {
  return (
    <header>
      <nav>
        <a href="/" aria-label="Kashif Abid home">
          Kashif Abid
        </a>

        <div>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar