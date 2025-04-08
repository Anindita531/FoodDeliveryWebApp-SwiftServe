import React from "react";
import "../styles/about.css";
import Footer from "./Footer";
import TopBar from "./TopBar";

const About = () => {
  return (
    <div>
      <TopBar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Your Restaurant</strong>, where we serve delicious food made with love! 
          Our mission is to provide high-quality meals with fresh ingredients. 
          Whether you're here for a quick bite or a special occasion, we’ve got something for you.
        </p>
        <h2>Our Story</h2>
        <p>
          Established in 2020, our restaurant has been a place for food lovers to gather and enjoy
          authentic flavors. Our chefs are passionate about creating dishes that bring comfort and joy.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fresh, high-quality ingredients</li>
          <li>Wide variety of dishes</li>
          <li>Excellent customer service</li>
          <li>Comfortable ambiance</li>
        </ul>
      </div>
