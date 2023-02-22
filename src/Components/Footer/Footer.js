import React, { Component } from "react";
import "../../styles/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer container-fluid">
        <div className="contact col-lg-4" id="contact">
          <h1>Kontakt</h1>
          <h3>(+48) 123-456-789</h3>
          <h5>support@cargotrans.com</h5>
        </div>

        <div className="social-media col-lg-4">
          <h2>Odwiedź nasze sociale</h2>
          <h1>
            <a href="https://www.facebook.com/" target="blank">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </h1>
          <h1>
            <a href="https://www.instagram.com/" target="blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </h1>
          <h1>
            <a href="https://twitter.com/" target="blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </h1>
        </div>

        <div className="other-info col-lg-4">
          <h2>Projekt wspierany przez</h2>
          <ul>
            <li>
              <img
                src="https://clicktrans.pl/bundles/app/images/EU-grants/pl_PL/mobile/fundusze-mobile.svg"
                alt="Fundusz Europejski"
              ></img>
            </li>
            <li>
              <img
                src="https://clicktrans.pl/bundles/app/images/EU-grants/pl_PL/mobile/ncbr-mobile.svg"
                alt="Narodowe Centrum Badań i Rozwoju"
              ></img>
            </li>
            <li>
              <img
                src="https://clicktrans.pl/bundles/app/images/EU-grants/pl_PL/mobile/ue-mobile.svg"
                alt="Unia Europejska"
              ></img>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
