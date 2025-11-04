import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import CartModal from "../components/CartModal";

const PAGE_SIZE = 5;

export default function Products() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleBuy = (product) => {
    setCartItems((s) => [...s, product]);
    setCartOpen(true);
  };

  const filtered = products.filter((p) => {
    if (category === "all") return true;
    return p.category === category;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // keep page in range when filter changes
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div>
      <Header />
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div role="tablist" aria-label="Product categories">
            <button
              onClick={() => {
                setCategory("all");
                setPage(1);
              }}
              aria-pressed={category === "all"}
              style={{
                marginRight: 8,
                padding: "6px 10px",
                borderRadius: 4,
                border:
                  category === "all" ? "2px solid #333" : "1px solid #ccc",
                background: category === "all" ? "#f5f5f5" : "white",
              }}
            >
              All
            </button>
            <button
              onClick={() => {
                setCategory("cupcake");
                setPage(1);
              }}
              aria-pressed={category === "cupcake"}
              style={{
                marginRight: 8,
                padding: "6px 10px",
                borderRadius: 4,
                border:
                  category === "cupcake" ? "2px solid #333" : "1px solid #ccc",
                background: category === "cupcake" ? "#f5f5f5" : "white",
              }}
            >
              Cupcakes
            </button>
            <button
              onClick={() => {
                setCategory("wedding");
                setPage(1);
              }}
              aria-pressed={category === "wedding"}
              style={{
                padding: "6px 10px",
                borderRadius: 4,
                border:
                  category === "wedding" ? "2px solid #333" : "1px solid #ccc",
                background: category === "wedding" ? "#f5f5f5" : "white",
              }}
            >
              Wedding cakes
            </button>
          </div>

          <div>
            <button
              onClick={() => setCartOpen(true)}
              style={{
                position: "relative",
                padding: "6px 10px",
                borderRadius: 6,
              }}
            >
              Cart
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    background: "red",
                    color: "white",
                    borderRadius: 12,
                    padding: "2px 6px",
                    fontSize: 12,
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {visible.map((p, i) => (
            <ProductCard
              key={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              onBuy={() => handleBuy(p)}
              index={i}
            />
          ))}
        </section>
      </div>

      <CartModal
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={(item) =>
          setCartItems((s) => s.filter((i, idx) => i !== item))
        }
        onCheckout={() => {
          alert("Checkout placeholder");
          setCartItems([]);
          setCartOpen(false);
        }}
      />

      <nav aria-label="Products pagination" style={{ padding: "0 1rem 2rem" }}>
        <button
          onClick={() => setPage((s) => Math.max(1, s - 1))}
          disabled={page === 1}
          style={{ marginRight: 8 }}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            aria-current={p === page ? "page" : undefined}
            style={{
              marginRight: 6,
              fontWeight: p === page ? "bold" : "normal",
            }}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
          disabled={page === totalPages}
          style={{ marginLeft: 8 }}
        >
          Next
        </button>
      </nav>
    </div>
  );
}
