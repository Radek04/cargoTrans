import React, { Component } from "react";
import "../../styles/Main.css";
import userjpg from "../../images/user.jpg";
import element1 from "../../images/element1.jpg";
// import teamjpg from "./team.jpg";
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
                  <button className="button">
                    <NavLink to="/weOrder">Przejdź dalej</NavLink>
                  </button>
                </div>
              </div>
            </div>

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
                  <button className="button">
                    <NavLink to="/lookFor">Przejdź dalej</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="announcements">
          <h1>Najnowsze ogłoszenia</h1>
          <div className="underline"></div>
          <table className="orders-table">
            <thead>
              <tr>
                <th width="30px">
                  <h3>Zdjęcie</h3>
                </th>
                <th>
                  <h3>Ładunek</h3>
                </th>
                <th>
                  <h3>Skąd</h3>
                </th>
                <th>
                  <h3>Dokąd</h3>
                </th>
                <th>
                  <h3>Cena</h3>
                </th>
                <th>
                  <h3>Ciężar</h3>
                </th>
                <th>
                  <h3>Wymiary</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="1">WYBIERZ</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="2">WYBIERZ</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="3">WYBIERZ</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="4">WYBIERZ</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="5">WYBIERZ</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://wyslijbusem.pl/assets/img/no-photo.jpg"
                    alt="logo"
                    width="80px"
                    height="80px"
                  ></img>
                </td>
                <td>Bmw e46</td>
                <td>Rzeszów</td>
                <td>Warszawa</td>
                <td>400zł</td>
                <td>2349kg</td>
                <td>
                  Dł. 447cm
                  <br />
                  Wys. 140cm <br /> Szer. 170cm
                </td>
                <td>
                  <button id="6">WYBIERZ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info">
          <div className="about-us" id="about-us">
            <h1>O nas</h1>
            <div className="underline"></div>
            <div className="description">
              <p>
                Clicktrans to serwis łączący osoby i firmy poszukujące
                transportu dużych przesyłek z przewoźnikami. Jesteśmy giełdą
                transportową działającą na rynku od ponad 15 lat.
              </p>
            </div>
          </div>
          <div className="employer" id="employer">
            <h1>Dla zleceniodawcy</h1>
            <div className="underline"></div>
            <p>
              Biorąc udział w giełdzie transportowej jako zleceniodawca może być
              korzystne dla Twojej firmy, ponieważ umożliwia ona szybkie i łatwe
              porównanie ofert różnych przewoźników i wybór najlepszej opcji dla
              Twojego ładunku.Przede wszystkim, ważne jest, aby dokładnie
              określić wymagania dotyczące transportu i udostępnić te informacje
              na giełdzie. Im więcej informacji udostępnisz, tym więcej ofert
              otrzymasz i tym łatwiej będzie Ci dokonać wyboru. Warto wspomnieć
              o wymaganiach dotyczących terminu, miejsca, wielkości ładunku i
              wymaganej obsługi.Kolejnym ważnym krokiem jest monitorowanie ofert
              przewoźników i szybka reakcja na te, które odpowiadają Twoim
              wymaganiom. Platformy giełdowe często udostępniają narzędzia,
              takie jak automatyczne powiadomienia o nowych ofertach, co
              umożliwia Ci łatwe i szybkie zarządzanie zleceniami.Dobrą praktyką
              jest również przeglądanie opinii i recenzji przewoźników, aby
              upewnić się, że wybrany przewoźnik jest rzetelny i posiada dobrą
              reputację. Kontakt i komunikacja z przewoźnikiem przed i w trakcie
              transportu również jest ważny, aby upewnić się, że wszystko
              przebiega bezproblemowo.Wreszcie, po zakończeniu transportu ważne
              jest, aby ocenić jakość usług i opublikować pozytywną recenzję,
              jeśli jest to zasłużone. To może pomóc w budowaniu pozytywnej
              reputacji i przyciągnięciu więcej ofert w
              przyszłości.Podsumowując, biorąc udział w giełdzie transportowej
              jako zleceniodawca wymaga dokładnego planowania, uważnego
              monitorowania i szybkiej reakcji, ale jeśli jest to dobrze
              zarządzane, może być korzystne i oszczędne dla Twojej firmy. Z
              giełdy transportowej można korzystać jako regularne rozwiązanie do
              zarządzania transportem, ponieważ dostarcza ona wielu opcji i
              umożliwia porównanie cen i usług.Oprócz oszczędności finansowych,
              giełdy transportowe również pozwalają na optymalizację procesu
              transportu, ponieważ pozwalają na szybkie i łatwe porozumiewanie
              się z przewoźnikami i śledzenie postępu transportu w czasie
              rzeczywistym.Warto pamiętać, że wybór odpowiedniego przewoźnika na
              giełdzie transportowej może wpłynąć na jakość i niezawodność
              transportu, dlatego ważne jest, aby dokładnie przestudiować
              profile przewoźników i ich opinie, zanim zdecydujesz się na
              wybór.Podsumowując, biorąc udział w giełdzie transportowej jako
              zleceniodawca daje Ci kontrolę nad procesem transportu i umożliwia
              optymalizację kosztów i jakości usług. Z uwagą i dokładnością
              możesz w pełni wykorzystać potencjał giełdy transportowej i
              zapewnić swojej firmie niezawodne i oszczędne rozwiązania
              transportowe.
            </p>
          </div>
          <div className="carrier" id="carrier">
            <h1>Dla przewoźnika</h1>
            <div className="underline"></div>
            <p>
              Giełda transportowa to platforma internetowa, która umożliwia
              przewoźnikom i nadawcom ładunków łatwe i efektywne planowanie i
              organizację przemieszczenia towarów. Przewoźnicy udostępniają
              informacje o dostępnej powierzchni ładunkowej w swoich pojazdach,
              a nadawcy ładunków wyszukują odpowiedniego przewoźnika i rezerwują
              powierzchnię.
            </p>
            <p>
              Aby korzystać z giełdy transportowej jako przewoźnik, należy
              zarejestrować się na platformie i udostępnić następujące
              informacje:
            </p>
            <ol>
              <li>
                Typ i wielkość pojazdu: na giełdzie transportowej ważne jest,
                aby przewoźnicy udostępniali informacje o rodzaju i wielkości
                swojego pojazdu, aby nadawcy ładunków mogli wyszukać
                odpowiedniego przewoźnika.
              </li>
              <li>
                Obszar działania: przewoźnicy powinni wskazać, w jakich
                regionach są w stanie realizować transport, aby uniknąć
                niepotrzebnych zleceń z innych części kraju lub zagranicy.
              </li>
              <li>
                Dostępność i czas podróży: przewoźnicy powinni udostępnić
                informacje o swojej dostępności i czasie podróży, aby nadawcy
                ładunków byli w stanie określić, czy ich terminy dostawy są
                możliwe do zrealizowania.
              </li>
              <li>
                Cena za transport: ważne jest, aby przewoźnicy udostępniali
                aktualne i dokładne informacje na temat ceny za transport, aby
                nadawcy ładunków mogli porównać oferty różnych przewoźników.
              </li>
              <li>
                Historia i opinie: platformy giełdowe często udostępniają
                możliwość przeglądania historii i opinii na temat przewoźników,
                co pozwala nadawcom ładunków na wybór najlepszego dostawcy.
              </li>
            </ol>
            <p>
              Udostępnianie aktualnych i dokładnych informacji jest kluczowe dla
              sukcesu na giełdzie transportowej. Przewoźnicy powinni również
              regularnie aktualizować swoje profile, aby zachować wiarygodność i
              zapewnić nadawcom ładunków najnowsze informacje.Oprócz
              udostępniania informacji, przewoźnicy powinni również monitorować
              oferty nadawców ładunków i szybko odpowiadać na zlecenia, aby
              zwiększyć swoje szanse na uzyskanie zlecenia. Platformy giełdowe
              często udostępniają narzędzia, takie jak automatyczne
              powiadomienia o nowych zleceniach, co pomaga przewoźnikom szybko
              reagować na zmiany.Ponadto, przewoźnicy powinni zachować dobry
              poziom obsługi i komunikacji z nadawcami ładunków, aby zbudować
              dobre relacje i uzyskać pozytywne recenzje. To może przyciągnąć
              więcej zleceń i pomóc zwiększyć obroty.Oprócz korzyści dla
              przewoźników, giełdy transportowe również pozwalają na oszczędność
              czasu i pieniędzy dla nadawców ładunków. Platformy te umożliwiają
              szybkie i łatwe porównanie ofert różnych przewoźników, co pozwala
              na wybór najlepszej opcji.Podsumowując, giełdy transportowe to
              efektywne i wygodne rozwiązanie dla przewoźników i nadawców
              ładunków, które pozwala na szybsze i prostsze planowanie i
              organizację transportu. Przewoźnicy powinni udostępniać aktualne i
              dokładne informacje oraz monitorować oferty nadawców ładunków, aby
              zwiększyć swoje szanse na uzyskanie zlecenia.
            </p>
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
                src={element1}
                alt="element1"
                width="800px"
                height="400px"
              ></img>
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
      </main>
    );
  }
}

export default Main;
