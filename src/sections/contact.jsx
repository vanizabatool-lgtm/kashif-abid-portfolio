import { useState } from 'react'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setStatus('Message sent successfully!')

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__content">
          <p className="contact__eyebrow">Get In Touch</p>

          <h2>
            Let&apos;s build something meaningful together.
          </h2>

          <p>
            Interested in technology, innovation, digital transformation,
            or a potential collaboration? Let&apos;s start a conversation.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />

          <button type="submit">Send Message</button>

          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact