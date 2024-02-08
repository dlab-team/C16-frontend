// import React from "react";
import "./Styles.css";
import imagenes from "../../../public/assets/img";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background">
      <svg width="1920" height="380" viewBox="0 0 1920 374" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M114.493 17.0361C20.9597 38.1908 0 59.1298 0 59.1298V366L1919.99 373.077L1920 77.3343C1920 77.3343 1592.06 128.076 1384.94 113.281C1085.95 91.924 998.471 87.4168 768.508 48.0292C590.795 17.5908 294.735 -23.7293 114.493 17.0361Z" fill="#FFC5E4"/>
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
