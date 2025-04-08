import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { Link } from "react-router-dom";
import "../styles/FirmCollections.css"; // Ensure you have an external CSS file

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);  // Holds vendor firm data
  const [selectedRegion, setSelectedRegion] = useState("All");  // Tracks selected category
  const [activeCategory, setActiveCategory] = useState("all");  // Highlights active filter
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error handling state

  // Fetch Firm Data from API
  useEffect(() => {
    const fetchFirmData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/vendor/all-vendors`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const newFirmData = await response.json();

        if (!newFirmData || !Array.isArray(newFirmData.vendors)) {
          throw new Error("Invalid API response structure");
        }

        setFirmData(newFirmData.vendors);
        setError(null); // Clear any previous error
      } catch (error) {
        setError("Failed to fetch firm data. Please try again later.");
        console.error("Error fetching firm data:", error);
        setFirmData([]); // Ensure firmData is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchFirmData();
  }, []);

  // Handle category selection
  const filterHandler = (region, category) => {
    setSelectedRegion(region);
    setActiveCategory(category);
  };

  return (
    <div className="firmCollectionsContainer">
      <h3 className="firmTitle">🍽️ Restaurants with Online Food Delivery in Hyderabad</h3>
      
      {/* Filter Buttons */}
      <div className="filterButtons">
        {["All", "South-Indian", "North-Indian", "Chinese", "Bakery"].map((category, index) => (
          <button
            key={index}
            onClick={() => filterHandler(category, category.toLowerCase())}
            className={activeCategory === category.toLowerCase() ? "activeButton" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && <p className="loadingMessage">Loading firms...</p>}

      {/* Error Message */}
      {error && <p className="errorMessage">{error}</p>}

      {/* Firm Display Section */}
      {!loading && !error && (
        <section className="firmSection">
          {firmData.length > 0 ? (
            firmData.map((apple) =>
              Array.isArray(apple.firm) ? (
                apple.firm.map((item) => {
                  if (
                    selectedRegion === "All" ||
                    (item.region && item.region.includes(selectedRegion.toLowerCase()))
                  ) {
                    return (
                      <Link to={`/products/${item._id}/${item.firmName}`} className="link" key={item._id}>
                        <div className="firmCard">
                          <div className="firmImageContainer">
                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                            <div className="firmOffer">{item.offer}</div>
                          </div>
                          <div className="firmDetails">
                            <strong>{item.firmName}</strong>
                            <p className="firmRegion">{item.region?.join(", ")}</p>
                            <p className="firmArea">{item.area}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                })
              ) : null
            )
          ) : (
            <p className="noDataMessage">No firms available</p>
          )}
        </section>
      )}
    </div>
  );
};

export default FirmCollections;
