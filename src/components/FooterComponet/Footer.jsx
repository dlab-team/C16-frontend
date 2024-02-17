// import React from "react";
import "./Styles.css";
import imagenes from "../../../public/assets/img";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <div className="footer__body">
          <Image src={imagenes.logo} />

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={imagenes.map} />
            </div>

            <div className="footer__text">
              <h5> Direccion</h5> <p>Bustamante 26, Providencia.</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={imagenes.enviar} />
            </div>

            <div className="footer__text">
              <h5>Email</h5> <p>hola@rondachile.cl</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={imagenes.phone} />
            </div>

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
        <div className="footer__line">
          <hr />
        </div>

        <div className="footer__footer">
          <div>
            <p> Sitio creado por el equipo de desarrollo</p>
          </div>

          <div className="footer__footer__logo">
            <a href="">
              <Image src={imagenes.dllogo} />
            </a>
            <div>
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
