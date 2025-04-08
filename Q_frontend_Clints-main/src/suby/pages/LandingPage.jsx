import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import ItemsDisplay from "../components/ItemsDisplay";
import Chains from "../components/Chains";
import FirmCollections from "../components/FirmCollections";
import Footer from "../components/Footer";
import "../styles/landingPage.css";

const API_URL = "http://localhost:5000";

const LandingPage = () => {
  const [ctaImages, setCtaImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch CTA images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/api/cta-images`);
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setCtaImages(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Auto-change images every 5 seconds
  useEffect(() => {
    if (ctaImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === ctaImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [ctaImages]);

  // Function to manually change images
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ctaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ctaImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <TopBar />

      {/* CTA Banner */}
      <div className="ctaBanner">
        {loading ? (
          <div className="ctaFallback">Loading Offers...</div>
        ) : error ? (
          <div className="ctaFallback error">{error}</div>
        ) : ctaImages.length > 0 ? (
          <div
            className="ctaImage"
            style={{
              backgroundImage: `url(${API_URL}${ctaImages[currentIndex].imageUrl})`,
            }}
          >
            <div className="ctaOverlay">
              <h2>{ctaImages[currentIndex].title}</h2>
              <p>{ctaImages[currentIndex].description}</p>
              <button className="ctaButton">Order Now</button>
            </div>
            <button className="ctaNav prev" onClick={handlePrevImage}>&#10094;</button>
            <button className="ctaNav next" onClick={handleNextImage}>&#10095;</button>
          </div>
        ) : (
          <div className="ctaFallback">No Offers Available</div>
        )}
      </div>

      {/* Main Sections */}
      <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
      </div>

      {/* Interactive Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
