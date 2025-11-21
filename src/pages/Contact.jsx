import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        // هنا يمكن إضافة منطق إرسال البريد (مثل Firebase أو API)
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* قسم المقدمة */}
            <section className="contact-hero-section py-5">
                <div className="container text-center">
                    <h1 className="display-4">Contact Us</h1>
                    <p className="lead">
We’d absolutely love to hear from all of you💛

At Outfique, we’re here to make the shopping and styling experience smooth,
 fun, and completely stress-free for everyone. Whether anyone needs help choosing 
 the right size, matching an outfit to their vibe, tracking an order, or getting general 
 fashion advice — our team is always ready to support all customers anytime.</p>
                </div>
            </section>

            {/* نموذج الاتصال ومعلومات */}
            <section className="contact-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Get in Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
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
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h2>Contact Information</h2>
                            <p><strong>Address:</strong> 123 Fashion Street, cairo</p>
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

            {/* خريطة */}
                  <section className="map-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Find Us</h2>
                    <div className="text-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.3342!3d29.8414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458b1234567890%3A0xabcdef123456!2sHelwan%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1698765432100!5m2!1sen!2seg"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Helwan Location Map"
                        ></iframe>
                        <p className="mt-3">Visit our store in Helwan, Cairo, Egypt. The marker shows the exact location.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 