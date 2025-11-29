import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero-section   py-5">
                <div className="container text-center">
                    <h1 className="display-4">About Outfique</h1>
                    <p className="lead">Your ultimate destination for stylish and affordable fashion.</p>
                </div>
            </section>

            <section className="story-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2025, Outfique started as a small passion project by a group of fashion enthusiasts who believed that style should be accessible to everyone. 
                                What began as a simple online store has grown into a thriving community of trendsetters and fashion lovers. 
                                We curate the latest trends, ensuring quality and sustainability in every piece.
                            </p>
                            <p>
                                From humble beginnings, we've expanded our collection to include everything from casual wear to formal attire, all designed to make you look and feel your best.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://mostaql.hsoubcdn.com/uploads/thumbnails/414183/62b7917e2dffa/204.jpg" alt="Our Story" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section  text-white py-5">
                <div className="container text-center">
                    <h2>Our Mission & Vision</h2>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h4>Mission</h4>
                            <p>To provide high-quality, trendy fashion at affordable prices, empowering our customers to express their unique style.</p>
                        </div>
                        <div className="col-md-6">
                            <h4>Vision</h4>
                            <p>To become the go-to online fashion store worldwide, known for innovation, sustainability, and customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section py-5">
    <div className="container">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row">

            <div className="col-md-4 text-center">
                <img 
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Founder"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h5>Adam Collins</h5>
                <p>Founder & CEO</p>
            </div>

            <div className="col-md-4 text-center">
                <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Designer"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h5>Lara Mitchell</h5>
                <p>Lead Fashion Designer</p>
            </div>

            <div className="col-md-4 text-center">
                <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Manager"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <h5>Ryan Foster</h5>
                <p>Operations Manager</p>
            </div>

        </div>
    </div>
</section>


           <section className="values-section py-5" style={{ background: "#f8f9fa" }}>
    <div className="container">
        <h2 className="text-center mb-5" style={{ fontWeight: "700" }}>Our Values</h2>
        
        <div className="row g-4">

            <div className="col-md-4">
                <div className="p-4 text-center bg-white shadow rounded-4 value-card">
                    <i className="bi bi-award-fill fs-1 text-primary mb-3"></i>
                    <h5 className="fw-bold">Quality</h5>
                    <p>We ensure every product meets the highest standards.</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="p-4 text-center bg-white shadow rounded-4 value-card">
                    <i className="bi bi-recycle fs-1 text-success mb-3"></i>
                    <h5 className="fw-bold">Sustainability</h5>
                    <p>Committed to eco-friendly practices and materials.</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="p-4 text-center bg-white shadow rounded-4 value-card">
                    <i className="bi bi-people-fill fs-1 text-warning mb-3"></i>
                    <h5 className="fw-bold">Customer Focus</h5>
                    <p>We listen to your needs and aim to make every interaction simple and satisfying</p>
                </div>
            </div>

        </div>
    </div>
</section>

<section className="contact-section py-5" style={{ background: "#ffffff" }}>
    <div className="container text-center">
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="mb-4" style={{ fontSize: "18px" }}>
            Have questions? We'd love to hear from you!
        </p>

        <Link 
            to="/contact"
            className="btn btn-primary px-4 py-2 rounded-pill btn-lg shadow"
            style={{background:'rgb(111, 11, 36)',color:'white',fontSize: "18px",border:'none'}}
        >
            Contact Us
        </Link>
    </div>
</section>

        </div>
    );
};

export default About;