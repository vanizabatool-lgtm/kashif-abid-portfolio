import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            CEO · Technology Leader
          </p>

          <h1 id="hero-title">
            Building technology that creates
            <span> meaningful impact.</span>
          </h1>

          <p className="hero__description">
            Kashif Abid is a technology leader focused on AI, automation,
            cybersecurity, and digital transformation.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href="#work"
            >
              Explore My Work
            </a>

            <a
              className="hero__button hero__button--secondary"
              href="#contact"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-circle">
            <div className="hero__initials">KA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero