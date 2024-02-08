// import React from "react";
import "./Styles.css";
import imagenes from "../../../public/assets/img";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__background">
        <svg
          width="1457"
          height="373"
          viewBox="0 0 1457 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.8837 17.0326C15.9053 38.1829 0 59.1176 0 59.1176L8.55339 373H1457L1457 77.3184C1457 77.3184 1208.14 128.05 1050.96 113.258C824.076 91.9051 757.694 87.3989 583.186 48.0193C448.327 17.5871 223.661 -23.7245 86.8837 17.0326Z"
            fill="#FFC5E4"
            c
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
