import './Expertise.css'

function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="expertise__container">
        <div className="expertise__heading">
          <p className="expertise__eyebrow">Expertise</p>

          <h2>
            Technology expertise built around solving real-world problems.
          </h2>
        </div>

        <div className="expertise__grid">
          <article className="expertise__card">
            <h3>Artificial Intelligence</h3>
            <p>
              Building intelligent solutions that improve products,
              processes, and decision-making.
            </p>
          </article>

          <article className="expertise__card">
            <h3>Automation</h3>
            <p>
              Creating efficient systems that reduce repetitive work and
              improve operational performance.
            </p>
          </article>

          <article className="expertise__card">
            <h3>Cybersecurity</h3>
            <p>
              Helping organizations build secure and resilient digital
              environments.
            </p>
          </article>

          <article className="expertise__card">
            <h3>Digital Transformation</h3>
            <p>
              Turning technology into practical strategies for modern
              organizations.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Expertise