import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { smoothScrollToTop, updatePageTitle } from '../utils/navigation';
import '../styles/contact.css';

function Contact() {
  useEffect(() => {
    smoothScrollToTop();
    updatePageTitle('Contact Us - FurniHome');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us through any of the following methods:</p>

            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>Durbar Marg, Kathmandu 44600, Nepal</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+977 9841765432</p>
                  <p>+977 9841234567</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@furnihome.com.np</p>
                  <p>sales@furnihome.com.np</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Sunday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday - 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
