import React from "react";

const ProductCardList = ({ item }) => {
  // Convert description text into an array of sentences for bullets
  const descriptionBullets = item.description.split(
    /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\))\s+/
  );

  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-info">
        <h3>{item.title}</h3>
        <ul>
          {descriptionBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <div className="item-price">
          {/* <p>Rating: {item.rating?.rate}</p> */}
          <h5>€{item.price}</h5>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardList;
