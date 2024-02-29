import "./Styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <div className="footer__body">
          <img src="https://firebasestorage.googleapis.com/v0/b/tailsywhiskers.appspot.com/o/logo.svg?alt=media&token=516ded09-7338-4784-aa21-0e56cce2bf2d" alt="logo" />


          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              
              <img src="https://firebasestorage.googleapis.com/v0/b/tailsywhiskers.appspot.com/o/map.svg?alt=media&token=b1936fc2-8682-46ca-a10b-bbe583bf811a" alt="map" />

            </div>

            <div className="footer__text">
              <h5> Direccion</h5> <p>Bustamante 26, Providencia.</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
          <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FEnviar.svg?alt=media&token=408ca3b6-4ebd-42db-bbb6-8d34175ea9d2" alt="enviar" />
            </div>

            <div className="footer__text">
              <h5>Email</h5> <p>hola@rondachile.cl</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
<img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FTelefono.svg?alt=media&token=57b5ff91-0f6e-4a7e-8de0-bc774083272c" alt="telefono" />
            </div>

            <div className="footer__text">
              <h5> Teléfono</h5> <p> +56 9 3261 7984</p>
            </div>
          </div>
        </div>
        <div className="footer__logo">
          <a href="">
     
     <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FFacebook.svg?alt=media&token=d8cbf50c-6f90-4b46-96f6-30d7171f92a2" alt="facebook" />
          </a>
          <a href="">
          <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FInstagram.svg?alt=media&token=af05514b-4f2f-4e8e-9052-77a4e96bcff5" alt="instagram" />
          </a>
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FTwiiter.svg?alt=media&token=c89be9c2-373f-4430-8f7c-29707fa59cd9" alt="twiiter" />

          </a>
          <a href="">
            <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FYoutube.svg?alt=media&token=1b03de35-d84b-4bad-a370-7178b2e725ee" alt="youtube" />

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
              <img src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FlogoDesafioLatam.png?alt=media&token=bba247fc-7c12-4bf7-b712-e52140c23e5f" alt="desafio latam" />
             
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
