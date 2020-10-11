import React, { useState } from 'react';
import './style.css';
import Alert from './Alert'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState({ show: false })

    const handleSubmit = (e)=>{
        e.preventDefault()
        setAlert({ show: true, message: 'Send message successfully! (Note.. this form is only for testing, using my social network).' })
        setTimeout(() => {
            setAlert({ show: false })
        }, 30000);
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    return (
      <div>
        <div className="contact pd-y" id="contact">
          <div className="section-header mg-b-20 ">
            <h2 className="section-title mg-b-10">get in touch</h2>
            <span className="line"></span>
          </div>

          <div className="container">
            <div className="getintouch-items">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mb-5">
                  <div className="item">
                    <i className="fa fa-phone fa-2x"></i>
                    <h3 className="item-title">Phone</h3>
                    <span className="item-text">+20 112-672-8146 </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-5">
                  <div className="item mg">
                    <i className="fa fa-envelope fa-2x"></i>
                    <h3 className="item-title">Email</h3>
                    <a
                      href="mailto:youssefrashad119@gmail.com"
                      className=" text-decoration-none item-text"
                    >
                      youssefrashad119@gmail.com
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mb-5">
                  <div className="item">
                    <i className="fa fa-map-marker fa-2x"></i>
                    <h3 className="item-title">Address</h3>
                    <span className="item-text">
                      15 El Tohed ST, El Warraq, Giza, Egypt
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {alert.show && <Alert text={alert.message} /> }
            <form onSubmit={handleSubmit}>
              <div className="two-inputs">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e)=> setSubject(e.target.value)}
                required
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
