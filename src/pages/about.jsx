import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: "2rem",
        }}
      >
        <h3>
          At Munamii Cakery, each cake, each box of cupcakes that we make has a
          very special value for us.
        </h3>
        <h4>
          We not only want to bring a dessert to your table but rather a unique
          experience for you, which will become an unforgettable memory.
        </h4>
        <h4>
          We have been in the pastry market for more than 8 years and now we
          offer you a new way to shop through our website.
        </h4>
      </div>
      <div style={{ marginTop: "16rem" }}>
        <Footer />
      </div>
    </div>
  );
}
