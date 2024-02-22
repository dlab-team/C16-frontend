import Image from "next/image";

// import React from "react";
import "./Styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <div className="footer__body">
          <Image src={"/assets/img/logo.svg"} width={100} height={100} alt="logo"/>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={'/assets/img/map.svg'} width={100} height={100} alt="logo"/>
            </div>

            <div className="footer__text">
              <h5> Direccion</h5> <p>Bustamante 26, Providencia.</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={"/assets/img/Enviar.svg"} width={100} height={100} alt="logo"/>
            </div>

            <div className="footer__text">
              <h5>Email</h5> <p>hola@rondachile.cl</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <Image src={"/assets/img/Telefono.svg"} width={100} height={100} alt="logo"/>
            </div>

            <div className="footer__text">
              <h5> Teléfono</h5> <p> +56 9 3261 7984</p>
            </div>
          </div>
        </div>
        <div className="footer__logo">
          <a href="">
            <Image src={"/assets/img/Facebook.svg"} width={100} height={100} alt="logo"/>
          </a>
          <a href="">
            <Image src={'/assets/img/Instagram.svg'} width={100} height={100} alt="logo"/>
          </a>
          <a href="">
            <Image src={"/assets/img/Twiiter.svg"} width={100} height={100} alt="logo"/>
          </a>
          <a href="">
            <Image src={"/assets/img/Youtube.svg"} width={100} height={100} alt="logo"/>
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
              <Image src={"/assets/img/dllogo.svg"} width={100} height={100} alt="logo"/>
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
