import React from 'react'
import Header from './Header'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
        <Header />
        <div className="contact-us-container">
            <div className="h2-contact-form">
                <h2 className="contact-us-heading">Contact Us</h2>
                <form>
                    <div className="form-list">
                        <input type="text" id="name" placeholder="Full Name"/>
                        <input type="email" id="email" placeholder="Email" />
                        <input type="text" id="subject" placeholder="Subject"/>
                        <textarea id="message" placeholder="Input a message..."/>
                        <button id="sendMsgBtn">Send</button>
                    </div>
                    
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactUs