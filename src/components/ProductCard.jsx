import React from "react";

export default function ProductCard({
  image,
  title = "Untitled",
  price = "—",
  onAddToCart,
  onBuy,
  index = 0,
}) {
  const handleClick = onAddToCart || onBuy;

  return (
    <div
      className="card product-card"
      style={{
        maxWidth: 400,
        animationDelay: `${index * 60}ms`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#26AB9550",
      }}
    >
      <img
        className="card-img-top"
        src={image}
        alt={title}
        style={{ width: "100%", flex: "0 0 auto" }}
      />
      <div
        className="card-body text-center"
        style={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{price}</p>
        <div style={{ marginTop: "auto" }}>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
