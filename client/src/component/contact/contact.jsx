import React, { useState } from 'react'
import './contact.css'

import GitHubIcon from './GitHub-Mark-32px.png'
import LinkedInIcon from './linkedin.png'

import Footer from '../footer/footer'

export default function Contact() {
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
      .then(() => alert('Success!'))
      .catch(error => alert(error))
    e.preventDefault()
    resetForm()
  }

  return (
    <>
      <div className='contact'>
        <div className='contactContainer'>
          <div className='contactInfo'>
            <h1 className='title'>Contact Me</h1>
            
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
              <button className='submitButton' type='submit'>Send</button>
            </form>
            
            <p className='paragraph'>Business Inquiries:</p>
        
            <p className='paragraph'>aldaircarneirovera@gmail.com</p>
          </div>

        <div className='iconContainer'>
          <a href='https://github.com/AldairGithub' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={GitHubIcon} alt={'GitHub Icon Link'}/>
          </a>
          <a href='https://www.linkedin.com/in/aldair-carneiro/' target='_blank' rel="noopener noreferrer">
            <img className='imgContainer' src={LinkedInIcon} alt={'LinkedIn Icon Link'}/>
          </a>
      </div>
      </div>
      </div>
      <Footer />
    </>
  )
}