import './insights.css'

function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="insights__container">
        <div className="insights__heading">
          <p className="insights__eyebrow">Insights</p>

          <h2>
            Thoughts on technology, innovation, and digital transformation.
          </h2>
        </div>

        <div className="insights__grid">
          <article className="insights__card">
            <p className="insights__category">Artificial Intelligence</p>
            <h3>The Role of AI in Modern Business</h3>
            <p>
              Exploring how artificial intelligence can improve decision-making,
              efficiency, and long-term business growth.
            </p>
          </article>

          <article className="insights__card">
            <p className="insights__category">Technology</p>
            <h3>Building a Future-Ready Organization</h3>
            <p>
              How organizations can use technology and innovation to adapt to
              an increasingly digital world.
            </p>
          </article>

          <article className="insights__card">
            <p className="insights__category">Cybersecurity</p>
            <h3>Why Digital Security Matters</h3>
            <p>
              Understanding the importance of security, resilience, and
              responsible technology adoption.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Insights 
