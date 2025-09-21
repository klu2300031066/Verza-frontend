import React from 'react';
import '../components/style.css';
import { Link, Outlet } from "react-router-dom";
import HeroCarousel from './HeroCarousel';

const AboutUs = () => {
  return (
    <div className="about-container">
      <HeroCarousel />
      <h2>Welcome to Verza</h2>
      <p>
        Welcome to our E-Commerce platform, your one-stop shop for the latest and greatest in electronics!
        We specialize in high-quality products, including computers, mobiles, laptops, and accessories.
      </p>

      <div className="about-grid">
      <Link to="/computers">
        <div className="about-item">        
          <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=95&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Computers" />
          <h3>Computers</h3>
          <p>Find the best computers for gaming, work, and personal use.</p>
        </div>
        </Link>

        <Link to="/mobiles">
        <div className="about-item">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=95&w=400&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Mobiles" />
          <h3>Mobiles</h3>
          <p>Latest smartphones from top brands at unbeatable prices.</p>
        </div>
        </Link>
        <Link to="/laptops">
        <div className="about-item">
          <img src="https://cdn.mos.cms.futurecdn.net/ScV86zVws5qDnowbP7KsWA.jpg" alt="Dell Laptops" />
          <h3>Laptops</h3>
          <p>Powerful laptops for professionals, students, and gamers.</p>
        </div>
        </Link>
        <Link to="/pendrives">
        <div className="about-item">
          <img src="http://zebronics.com/cdn/shop/files/Zeb-power-pic1.jpg?v=1747306528&width=2048" alt="Zebronics Mouse" />
          <h3>Accessories</h3>
          <p>Find the best accessories like mice, keyboards, and more.</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;