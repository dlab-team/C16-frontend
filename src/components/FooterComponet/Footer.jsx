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
            <Image src={imagenes.map} />
            <div>
              <p>
                Direccion <br /> Bustamante 26, Providencia.
              </p>
            </div>
          </div>

          <div className="footer__body__contact">
            <Image src={imagenes.enviar} />
            <div>
              <p>
                Email <br /> hola@rondachile.cl
              </p>
            </div>
          </div>

          <div className="footer__body__contact">
            <Image src={imagenes.phone} />
            <div>
              <p>
                Teléfono <br /> +56 9 3261 7984
              </p>
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
