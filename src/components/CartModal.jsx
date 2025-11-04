import React from "react";

export default function CartModal({
  open,
  items = [],
  onClose,
  onRemove,
  onCheckout,
}) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="cart-modal-backdrop"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="cart-modal-panel"
        style={{
          background: "lightgray",
          padding: 20,
          width: 480,
          maxHeight: "80%",
          overflow: "auto",
          borderRadius: 8,
        }}
      >
        <h3>Cart</h3>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((it, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  style={{
                    width: 56,
                    height: 56,
                    objectFit: "cover",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{it.title}</div>
                  <div style={{ color: "#666" }}>{it.price}</div>
                </div>
                <button onClick={() => onRemove(it)} style={{ marginLeft: 8 }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 12,
          }}
        >
          <button onClick={onClose}>Close</button>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="btn btn-primary"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
