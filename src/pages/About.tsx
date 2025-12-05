import { useEffect } from 'react';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import { smoothScrollToTop, updatePageTitle } from '../utils/navigation';
import '../styles/about.css';

function About() {
  useEffect(() => {
    smoothScrollToTop();
    updatePageTitle('About Us - FurniHome');
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About FurniHome</h1>
        <p>Crafting Quality Furniture Since 1995</p>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              FurniHome has been Nepal's premier furniture destination for over 25 years.
              What started as a small family workshop in Kathmandu has grown into one of
              the most trusted names in quality furniture across the country.
            </p>
            <p>
              We believe that furniture is more than just functional pieces - they are an
              integral part of your home that reflects your personality and lifestyle.
              Every piece we craft combines traditional craftsmanship with contemporary
              design to create furniture that stands the test of time.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Furniture showroom"
            />
          </div>
        </div>

        <div className="values-section">
          <h2>Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <Award className="value-icon" />
              <h3>Premium Quality</h3>
              <p>We use only the finest materials and employ skilled craftsmen to ensure every piece meets our high standards.</p>
            </div>
            <div className="value-card">
              <Users className="value-icon" />
              <h3>Expert Team</h3>
              <p>Our experienced designers and craftsmen work together to create furniture that exceeds expectations.</p>
            </div>
            <div className="value-card">
              <Heart className="value-icon" />
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority. We provide exceptional service from selection to delivery.</p>
            </div>
            <div className="value-card">
              <TrendingUp className="value-icon" />
              <h3>Modern Designs</h3>
              <p>We stay ahead of trends while maintaining timeless appeal in every piece we create.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
