import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../services/authService";
import { FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./style.css";
import HeroCarousel from "./HeroCarousel";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Check if we're on the home page (not a category page)
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header__top">
          <div className="header__logo">
            <h1>Verza</h1>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Search for products, brands and more" />
            <button className="search-btn">Search</button>
          </div>
          <div className="header__actions">
            {isAuthenticated ? (
              <div className="profile-menu">
                <FaUserCircle
                  className="profile-icon"
                  size={28}
                  onClick={toggleDropdown}
                />
                         {dropdownOpen && (
                           <div className="dropdown">
                             <Link to="/cart" onClick={() => setDropdownOpen(false)}>
                               Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                             </Link>
                             <Link to="/orders" onClick={() => setDropdownOpen(false)}>Orders</Link>
                             <button onClick={handleLogout}>Logout</button>
                           </div>
                         )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login"><button className="btn-login">Login</button></Link>
                <Link to="/signup"><button className="btn-signup">Sign Up</button></Link>
              </div>
            )}
          </div>
        </div>
        <div className="header__nav">
          <Link to="/about-us">Home</Link>
          <Link to="/computers">Computers</Link>
          <Link to={isAuthenticated ? "/mobiles" : "/login"}>Mobiles</Link>
          <Link to={isAuthenticated ? "/laptops" : "/login"}>Laptops</Link>
          <Link to={isAuthenticated ? "/pendrives" : "/login"}>Accessories</Link>
        </div>
      </div>


      {/* Main Content */}
      <div className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">© Verza</div>
    </div>
  );
};

export default HomePage;
