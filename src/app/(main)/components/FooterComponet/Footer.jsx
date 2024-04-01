import './Styles.css'
import Image from 'next/image'
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlineMobile,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <div className="footer__body">
          <div className="footer__icon__mobile">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FlogoMobile.png?alt=media&token=ef7b53bb-9d9a-4f64-9cfe-f56454001dbf"
              alt="logo red nacional de cuidadores"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="footer__icon__web">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FRNC_Horizontal_Color.png?alt=media&token=7d7203c1-39ce-4e3f-b560-e7194ea0f8ac"
              alt="logo red nacional de cuidadores"
              width={320}
              height={120}
              loading="lazy"
            />
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <div className="icon">
                <AiOutlineEnvironment />
              </div>
            </div>

            <div className="footer__text">
              <h5> Direccion</h5> <p>Bustamante 26, Providencia.</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <div className="icon">
                <AiOutlineMail />
              </div>
            </div>

            <div className="footer__text">
              <h5>Email</h5> <p>hola@rondachile.cl</p>
            </div>
          </div>

          <div className="footer__body__contact">
            <div className="footer__body__contact__icon">
              <div className="icon">
                <AiOutlineMobile />
              </div>
            </div>

            <div className="footer__text">
              <h5> Teléfono</h5> <p> +56 9 3261 7984</p>
            </div>
          </div>
        </div>
        <div className="footer__logo">
          <a href="">
            <div className="icon">
              <AiFillFacebook />
            </div>
          </a>
          <a href="">
            <div className="icon">
              <AiFillInstagram />
            </div>
          </a>
          <a href="">
            <div className="icon">
              <AiOutlineTwitter />
            </div>
          </a>
          <a href="">
            <div className="icon">
              <AiFillYoutube />
            </div>
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
              <img
                src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FlogoDesafioLatam.png?alt=media&token=bba247fc-7c12-4bf7-b712-e52140c23e5f"
                alt="desafio latam"
              />
            </a>
            <div>
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
