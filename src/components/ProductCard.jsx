import React from "react";

export default function ProductCard({
  image,
  title = "Untitled",
  price = "—",
  onBuy,
  index = 0,
}) {
  return (
    <div
      className="card product-card"
      style={{ maxWidth: 400, animationDelay: `${index * 60}ms` }}
    >
      <img
        className="card-img-top"
        src={image}
        alt={title}
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{price}</p>
        <button type="button" className="btn btn-primary" onClick={onBuy}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
