import React, { Component } from "react";
import "../../styles/Main.css";
import userjpg from "../../images/user.jpg";
import element1 from "../../images/element1.jpg";
import team from "../../images/team.jpg";
import employer from "../../images/employer.jpg";
import carrier from "../../images/carrier.jpg";
import uslugi from "../../images/usługi.jpg";
import { NavLink } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <main className="main">
        <div className="select">
          <h1>Usługi</h1>
          <div className="underline"></div>
          <div className="grid-cols-2">
          <NavLink to="/weOrder">
            <div href="/" className="commission-btn">
              <div className="single-card-image">
                <div className="img">
                  <img src={uslugi} alt="comission" width="600px" />
                </div>
                <div className="items">
                  <p>
                    <strong>Zleć transport</strong>
                    <br />
                  </p>
                  <button className="button">Przejdź dalej</button>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/lookFor">
            <div href="/" className="lookfor-btn">
              <div className="single-card-image">
                <div className="img">
                  <img src={uslugi} alt="lookfor" width="600px" />
                </div>
                <div className="items">
                  <p>
                    <strong>Znajdź transport</strong>
                    <br />
                  </p>
                  <button className="button">Przejdź dalej</button>
                </div>
              </div>
            </div>
          </NavLink>
          </div>
        </div>

        <div className="info">
          <div className="about-us" id="about-us">
            <div className="info-size">
              <div className="infoleftside">
                <h2>O nas</h2>
                  <p>
                  Clicktrans to serwis łączący osoby i firmy poszukujące
                  transportu dużych przesyłek z przewoźnikami. Jesteśmy giełdą
                  transportową działającą na rynku od ponad 15 lat.
                  </p>
                  <button className="button">Zobacz więcej</button>
              </div>
              <div className="inforightside">
              <img src={team} alt="element1" width="600px" height="400px"></img>
              </div>
            </div>
          </div>

          <div className="employer" id="employer">
            <div className="info-size">
              <div className="infoleftside">
                <h2>Dla zleceniodawcy</h2>
                    <p>
                      Biorąc udział w giełdzie transportowej jako zleceniodawca może być
                      korzystne dla Twojej firmy, ponieważ umożliwia ona szybkie i łatwe
                      porównanie ofert różnych przewoźników i wybór najlepszej opcji dla
                      twojego ładunku.
                    </p>
                    <button className="button">Zobacz więcej</button>
              </div>
              <div className="inforightside">
              <img
                src={employer} alt="employer" width="600px" height="400px"></img>
              </div>
            </div>
          </div>

          <div className="carrier" id="carrier">
            <div className="info-size">
              <div className="infoleftside">
                <h2>Dla przewoźnika</h2>
                    <p>
                      Giełda transportowa to platforma internetowa, która umożliwia
                      przewoźnikom i nadawcom ładunków łatwe i efektywne planowanie i
                      organizację przemieszczenia towarów
                    </p>
                    <button className="button">Zobacz więcej</button>
              </div>
              <div className="inforightside">
              <img
                src={carrier} alt="carrier" width="600px" height="400px"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="element1">
          <div className="e1size">
            <div className="element1leftside">
              <h2>Bezpieczny transport dla twoich przesyłek</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                perferendis, dignissimos aperiam eligendi laudantium hic maiores
                totam.
              </p>
            </div>

            <div className="element1rightside">
              <img
                src={element1} alt="element1" width="600px" height="400px"></img>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="teamsize">
            <div className="teamleft">
              <h2>Poznaj naszą drużynę</h2>
            </div>
            <div className="teamright">
              <p>
                <img src={userjpg} alt="user" width="50px" height="50px" />
                <h6>Współzałożyciel</h6>
                <h5>Mateusz Trojnar</h5>
              </p>
              <p>
                <img src={userjpg} alt="user" width="50px" height="50px" />
                <h6>Współzałożyciel</h6>
                <h5>Damian Kania</h5>
              </p>
              <p>
                <img src={userjpg} alt="user" width="50px" height="50px" />
                <h6>Współzałożyciel</h6>
                <h5>Radosław Szynal</h5>
              </p>
            </div>
          </div>
        </div>


        <div className="rating">
          <section>
            <h1>Opinie użytkowników</h1>
            <div className="underline"></div>

            <div className="rating-box">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                alt="google"
              ></img>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <br />
              <h2>
                4.9<span>/5.0</span>
              </h2>
              <p>
                Ocena Cargotrans z <b>6574 opinii Google</b>
              </p>
            </div>
          </section>
        </div>

        <div className="opinions">
          <section>
            <div className="users-opinions-box">
              <p>Marek Słuszek</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
            <div className="users-opinions-box">
              <p>Wojciech Kowalski</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
            <div className="users-opinions-box">
              <p>Damian Kozioł</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
            <div className="users-opinions-box">
              <p>Łukasz Sieradz</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
            <div className="users-opinions-box">
              <p>Mateusz Marok</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
            <div className="users-opinions-box">
              <p>Michał Samoń</p>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p>Polecam</p>
            </div>
          </section>
        </div>

      </main>
    );
  }
}

export default Main;
