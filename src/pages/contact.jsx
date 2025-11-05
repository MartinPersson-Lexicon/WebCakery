import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: "2rem",
        }}
      >
        <h3>
          Home delivery service: All the city of Stockholm (redacted) and Malmo
          (redacted) with additional cost.
        </h3>
        <h4>
          Place to pick up order: Via la Costa Avenue. Blue Port gated
          neighbourhood. We will send you the GPS Location via WhatsApp.
        </h4>
        <h4>
          Orders must be placed 2 days before for greater security, processing
          and availability.
        </h4>
        <h4>
          Contact us via WhatsApp at (redacted) or via email at Tuesday to
          Saturday 9 a.m. at 2 p.m.
        </h4>
      </div>
      <div style={{ marginTop: "16rem" }}>
        <Footer />
      </div>
    </div>
  );
}
