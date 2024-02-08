// import React from "react";
import "./Styles.css";
import imagenes from "../../../public/assets/img";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background">
        <svg
          width="100%"
          height="374"
          viewBox="0 0 1469 374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.5491 17.0361C16.0271 38.1908 0 59.1298 0 59.1298V366L1468.15 373.077L1468.16 77.3343C1468.16 77.3343 1217.39 128.076 1059.01 113.281C830.387 91.924 763.497 87.4168 587.652 48.0292C451.761 17.5908 225.374 -23.7293 87.5491 17.0361Z"
            fill="#FFC5E4"
          />
        </svg>
      </div>

      <div className="footer__title">
        <div className="footer__body">
          <Image src={imagenes.logo} />

          <div className="footer__body__contact">
            <Image src={imagenes.map} />

            <div className="footer__text">
              <h5> Direccion</h5> <p>Bustamante 26, Providencia.</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <Image src={imagenes.enviar} />
            <div className="footer__text">
              <h5>Email</h5> <p>hola@rondachile.cl</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <Image src={imagenes.phone} />

            <div className="footer__text">
              <h5> Teléfono</h5> <p> +56 9 3261 7984</p>
            </div>
          </div>
        </div>
        <div className="footer__logo">
          <a href="">
            <Image src={imagenes.facebook} />
          </a>
          <a href="">
            <Image src={imagenes.instagram} />
          </a>
          <a href="">
            <Image src={imagenes.X} />
          </a>
          <a href="">
            <Image src={imagenes.youtube} />
          </a>
        </div>
        <hr className="footer__line" />
        <div className="footer__footer">
          <div>
            <p> Sitio creado por el equipo de desarrollo</p>
          </div>
          <a href="">
            <Image src={imagenes.dllogo} />
          </a>

          <div>
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
