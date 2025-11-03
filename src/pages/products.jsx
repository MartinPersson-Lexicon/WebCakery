import Header from "../components/header";

export default function Products() {
  return (
    <div>
      <Header />
      <div className="card" style={{ width: "400px" }}>
        <img className="card-img-top" src="cc01.jpg" alt="Cupcake01" />
        <div className="card-body">
          <h4 className="card-title">A Title</h4>
          <p className="card-text">A Price</p>
          <button type="button" className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
