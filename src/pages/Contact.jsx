import React, { useState } from 'react';
import Map from "../components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="contact-page">
      <section className="contact-hero-section py-5">
        <div className="container text-center">
          <h1 className="display-4">Contact Us</h1>
          <p>
            We’d absolutely love to hear from all of you💛
            At Outfique, we’re here to make the shopping and styling experience smooth,
            fun, and completely stress-free for everyone. Whether anyone needs help choosing 
            the right size, matching an outfit to their vibe, tracking an order, or getting general 
            fashion advice — our team is always ready to support all customers anytime.
          </p>
        </div>
      </section>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Get in Touch</h2>
              <form
                action="https://formspree.io/f/mgvglnga"
                method="POST"
              >
                <div className="mb-3">
                  <label htmlFor="full_name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn" style={{background:'rgb(111, 11, 36)', color:'white'}}>
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <h2>Contact Information</h2>
              <p><strong>Address:</strong> 123 Fashion Street, Cairo</p>
              <p><strong>Phone:</strong> 01055809511</p>
              <p><strong>Email:</strong> outfique@gmail.com</p>
              <p><strong>Hours:</strong> Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun: Closed</p>
              <h3>Follow Us</h3>
              <p className="social-icons">
                <a
                  href="https://www.facebook.com/share//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 fs-2 text-primary"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/?igsh=dmx0NHJpOG1tbm56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 fs-2 text-danger"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Map />
    </div>
  );
};

export default Contact;
