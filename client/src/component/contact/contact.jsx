import React, { useState } from 'react'
import './contact.css'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value
    })
  }

  const resetForm = () => {
    setContact({
      name: '',
      email: '',
      message: ''
    })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "contact", ...contact })
    })
      .then(() =>
      setMessage(`Thank you ${contact.name} for the message`)
    )
      .catch(error => alert(error))
    e.preventDefault()
    resetForm()
  }
  return (
    <>
      <div id='contact' className='contact'>
        <div className='contactContainer'>
          <div className='contactInfo'>
            <h1 className='contact-title'>Contact Me</h1>
            <div className='message-sent'>
              {message}
            </div>
            <form
              className='contactForm'
              onSubmit={handleSubmit}
            >
              <div className='contactText'>
                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />
                <input required
                  className='contactInput'
                  type='text'
                  name='name'
                  value={contact.name}
                  onChange={handleChange}
                  placeholder='Name'
                />
                <input required
                  className='contactInput'
                  type='email' name='email'
                  value={contact.email}
                  onChange={handleChange}
                  placeholder='Email'
                />
              </div>
              <textarea required
                className='contactBox'
                rows='4'
                cols='500'
                name='message'
                value={contact.message}
                onChange={handleChange}
                placeholder='Message'
              />
              <button className='submitButton' type='submit'>SEND</button>
            </form>
            <div className='personal-email-container'>
              <p className='paragraph'>Business Inquiries:</p>
              <a href='mailto:aldaircarneirovera@gmail.com' target='_blank' rel="noopener noreferrer" className='paragraph email'>aldaircarneirovera@gmail.com</a>
            </div>
          </div>
      </div>
      </div>
      <div className='clear'></div>
      <div className='clear'></div>
    </>
  )
}