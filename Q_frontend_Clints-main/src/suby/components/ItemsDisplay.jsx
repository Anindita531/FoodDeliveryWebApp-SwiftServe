import React, { useState } from 'react';
import { itemData } from '../data';
import { MdOutlineCollections } from 'react-icons/md'; // Collection icon
import { FaStar } from 'react-icons/fa'; // Star icon
import '../styles/itemsDisplay.css'; // Ensure you have this CSS file
const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData);

    return (
        <div className="collection-container">
            {/* Attractive Title */}
            <h2 className="title">
                <MdOutlineCollections className="icon" />
                Our <span className="highlight">Collection</span>
                <FaStar className="icon" />
            </h2>

            {/* Item Grid */}
            <div className="itemSection">
                {displayItem.map((item, index) => (
                    <div key={index} className="gallery">
                        <img src={item.item_img} alt={item.item_name} />
                        <p className="item-name">{item.item_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemsDisplay;
