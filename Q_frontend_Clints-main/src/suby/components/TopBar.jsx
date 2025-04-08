import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/topbar.css"; // Ensure this CSS file is linked

const TopBar = () => {
  return (
    <section className="topBarSection">
      {/* Logo / Home Link */}
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>QUICK</h2>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="searchIcon" />
      </div>

      {/* Authentication Section */}
      <div className="userAuth">
        <FaUserCircle className="userIcon" />
        <Link to="/login" className="authLink">
          Login / SignUp
        </Link>
      </div>
    </section>
  );
};

export default TopBar;
//       <div className="chainGallery" id="chainGallery">