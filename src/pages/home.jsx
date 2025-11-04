import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: "2rem",
        }}
      >
        <h3>Hi! Welcome to Munamii Cakery!</h3>
        <h4>
          We offer you the most delicious cakes and cupcakes for all kinds of
          events and celebrations.
        </h4>
        <h4>Browse around to discover what you would like to buy.</h4>
        <Footer />
      </div>
    </div>
  );
}
