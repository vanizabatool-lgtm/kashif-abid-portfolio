import './Work.css'

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <div className="work__heading">
          <p className="work__eyebrow">Selected Work</p>

          <h2>
            Building solutions that turn ideas into meaningful results.
          </h2>
        </div>

        <div className="work__grid">
          <article className="work__card">
            <p className="work__number">01</p>
            <h3>AI & Automation</h3>
            <p>
              Intelligent solutions designed to streamline processes,
              improve efficiency, and create measurable impact.
            </p>
          </article>

          <article className="work__card">
            <p className="work__number">02</p>
            <h3>Digital Transformation</h3>
            <p>
              Technology-driven strategies that help organizations modernize
              their systems and operations.
            </p>
          </article>

          <article className="work__card">
            <p className="work__number">03</p>
            <h3>Cybersecurity Solutions</h3>
            <p>
              Security-focused approaches designed to protect digital
              environments and strengthen resilience.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Work