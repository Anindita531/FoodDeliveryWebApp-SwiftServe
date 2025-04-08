import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../styles/chains.css"; // Ensure you have this CSS file

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVendors = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors?order=desc`);
      const newData = await response.json();
      setVendorData(newData);
      console.log("Fetched Data:", newData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch vendor data", error);
      alert("Error fetching restaurant chains. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (gallery) {
      gallery.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mediaChainSection">
      {/* Loader */}
      {loading && (
        <div className="loaderSection">
          <div className="loader">Your 🥣 is Loading...</div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      )}

      {/* Scroll Buttons */}
      <div className="btnSection">
        <button onClick={() => handleScroll("left")} aria-label="Scroll Left">
          <FaRegArrowAltCircleLeft className="btnIcons" />
        </button>
        <button onClick={() => handleScroll("right")} aria-label="Scroll Right">
          <FaRegArrowAltCircleRight className="btnIcons" />
        </button>
      </div>

      <h3 className="chainTitle">Top restaurant chains in Delhi</h3>

      {/* Vendor List */}
      <section className="chainSection" id="chainGallery">
        {vendorData?.vendors?.map((vendor) =>
          vendor.firm.map((item) => (
            <div className="vendorBox" key={item._id}>
              <Link to={`/products/${item._id}/${item.firmName}`} className="link">
                <div className="firmImage">
                  <img
                    src={`${API_URL}/uploads/${item.image}`}
                    className="topimg"
                    alt={item.firmName}
                  />
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Chains;
