import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div class="container-footer">
      <footer class="footer">
        <h5 class="footer_message">
          Crea tus propios eventos.
          <span>
            <button class="btn_pasos outline-primary">Get Started</button>
          </span>
        </h5>

        <div class="row border-top mb-4">
          <div class="col-3 mt-4">
            <h5>Tu cuenta</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Registrarse
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Iniciar sesión
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          <div class="col-3 mt-4">
            <h5>Descubrir</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Grupos
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Calendario
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Temas
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Ciudades
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Eventos en línea
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Guías locales
                </a>
              </li>
            </ul>
          </div>

          <div class="col-2 mt-4">
            <h5>Makeitevent</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Acerca de
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Empleo
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Aplicaciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="wrapper_follow">
          <div class="wrapper_social">
            <h5 class="">Síguenos</h5>
            <div class="d-flex justify-content-between">
              <ul class="list-unstyled d-flex">
                <li class="icon_list">
                  <a class="icons" href="#">
                    <BsFacebook className="icons" />
                  </a>
                </li>
                <li class="px-3">
                  <a class="icons" href="#">
                    <BsTwitter className="icons" />
                  </a>
                </li>
                <li class="px-3">
                  <a class="icons" href="#">
                    <BsYoutube className="icons" />
                  </a>
                </li>
                <li class="px-3">
                  <a class="icons" href="#">
                    <BsInstagram className="icons" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="wrapper_apps">
            <a
              href="#home"
              aria-label="Download app from Google Play"
              data-element-name="footer-googlePlayLogo"
              data-event-label="Google play download"
            >
              <span className="span_1">
                <span className="span_2">
                  <img
                    className="img_1"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2738%27/%3e"
                  />
                </span>
                <img
                  alt="get-it-on-google-play"
                  src="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="img_2"
                  srcset="https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=128 1x, https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256 2x"
                />
              </span>
            </a>

            <a
              href="#home"
              aria-label="Download app from App Store"
              data-element-name="footer-appStoreLogo"
              data-event-label="App store download"
            >
              <span className="span_1">
                <span className="span_2">
                  <img
                    className="img_1"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2738%27/%3e"
                  />
                </span>
                <img
                  alt="download-on-the-app-store"
                  src="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="img_2"
                  srcset="https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=128 1x, https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=256 2x"
                />
              </span>
            </a>
          </div>
        </div>

        <div className="footer_end">
          <span class="text-white pe-4">© 2022 Makeitevents</span>
          <a
            href="https://www.meetup.com/terms/"
            data-event-label="Terms of Service"
            class="footer-link text-muted pe-4"
          >
            Terms of Service
          </a>
          <a
            href="https://www.meetup.com/privacy/"
            data-event-label="Privacy Policy"
            class="footer-link text-muted pe-4"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.meetup.com/cookie_policy/"
            data-event-label="Cookie Policy"
            class="footer-link text-muted pe-4"
          >
            Cookie Policy
          </a>
          <a
            href="https://www.meetup.com/help/"
            data-event-label="Help"
            class="footer-link text-muted"
          >
            Help
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
