import React, { useState } from 'react'
import './Contact.css'
import HeadingText from '../../components/HeadingText/HeadingText.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', 'c932b4ca-793a-4205-b421-cd52607473d6')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      setSubmitSuccess(true)
    }
  }
  return (
    <>
      <section>
        <HeadingText title={'Contact'} titlePrimary={'Me'} />
        <div className="container contact-container">
          {submitSuccess ? (
            <div className="success-message submit-message">
              Thank you for your message!
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <input type="text" name="name" required placeholder="Your Name" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
              />
              <input type="number" name="number" placeholder="Your Number" />
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn">
                Send
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
      <footer>Copyright All Right Reserved || ©ThatDay1 Github.</footer>
    </>
  )
}

export default Contact
