import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";

export default function Footer() {
  return (
    // <div style={{ backgroundColor: "#23242a" }}>
    <div class="footer fixed-bottom width-100 ">
      <div
        className="position-absolute bottom-0 width-100 start-50 translate-middle-x "
        style={{ backgroundColor: "#23242a" }}
      >
        <div className="d-grid gap-5 d-md-flex justify-content-md-center">
          {/* <h4> Go to our Facebook:</h4> */}
          <a
            href="https://www.facebook.com/munamiicupcakes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Munamii Cupcakes on Facebook (opens in new tab)"
            className="btn"
          >
            <img src={facebookIcon} alt="Facebook logo" style={{ width: 48 }} />
          </a>

          <a
            href="https://www.instagram.com/munamii.cakery/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Munamii Cupcakes on Instagram (opens in new tab)"
            className="btn"
          >
            <img
              src={instagramIcon}
              style={{ width: 48 }}
              alt="Instagram logo"
            />
          </a>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "#23242a" }}>
          © 2025 Copyright: Martin
          {/* <a className="text-white" href="https://appfinningar.se/">
          Appfinningar.se
        </a> */}
        </div>
      </div>
    </div>
  );
}
