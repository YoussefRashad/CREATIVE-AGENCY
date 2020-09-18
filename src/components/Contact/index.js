import React from 'react';
import './style.css';
const Contact = () => {
  return (
    <div>
      <div className="contact pd-y" id="contact">
            <div className="section-header mg-b-20 ">
                <h2 className="section-title mg-b-10">get in touch</h2>
                <span className="line"></span>
            </div>
            <div className="container">
                <div className="getintouch-items">
                    <div className="item">
                        <i className="fa fa-phone fa-2x"></i>
                        <h3 className="item-title">Phone</h3>
                        <span className="item-text">512-421-3940</span>
                    </div>
                    <div className="item mg">
                        <i className="fa fa-envelope fa-2x"></i>
                        <h3 className="item-title">Email</h3>
                        <span className="item-text">email@support.com</span>
                    </div>
                    <div className="item">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <h3 className="item-title">Address</h3>
                        <span className="item-text">1739 Bubby Drive</span>
                    </div>
                </div>
                <form action="">
                    <div className="two-inputs">
                        <input type="text" placeholder="Name.."/>
                        <input type="text" placeholder="Email.."/>
                    </div>
                    <input type="text" placeholder="subject"/>
                    <textarea cols="30" rows="10" placeholder="Message.."></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div> 

    </div>
  );
};

export default Contact;
