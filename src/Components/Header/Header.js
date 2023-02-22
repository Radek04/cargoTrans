import "../../styles/Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header container-fluid fixed">
      <a href="/">
        <img src={logo} alt="logo.png" className="col-lg-2 img-fluid" />
      </a>

      <div className="links col-lg-8">
        <div className="dropdown">
          <a href="/">Oferta</a>
          <ul>
            <li>
              <a href="#employer">Dla zleceniodawcy</a>
            </li>
            <li>
              <a href="#carrier">Dla przewoźnika</a>
            </li>
          </ul>
        </div>
        <a href="#about-us">Informacje o firmie</a>
        <div className="dropdown">
          <a href="/">Pomoc</a>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Obsługa techniczna</a>
            </li>
          </ul>
        </div>
        <a href="#contact">Kontakt</a>
      </div>

      <div className="loginPanel col-lg-2">
        <a href="/" className="loginPanel-btn">
          Zaloguj się
        </a>
        <a href="/" className="loginPanel-btn">
          Zarejestruj się
        </a>
      </div>
    </header>
  );
};

export default Header;
