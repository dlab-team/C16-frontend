import React from "react";

import DinamicBanner from "../components/DinamicBanner/DinamicBanner";
import styles from "../components/DinamicBanner/DinamicBanner.module.css";

function Programa() {
    return (
        <DinamicBanner
            imageSrc='/assets/images/banner/programa.jpeg' // Cambia esto por la ruta de tu imagen
            title='Nuestro Programa' // Cambia esto por el título que desees
            message='' // Aquí puedes agregar un mensaje si lo deseas
            customStyles={{
                desktopContainer: styles.programaDesktopContainer,
                bannerImg: styles.programaBannerImg,
                bannerTextBox: styles.programaBannerTextBox,
                bannerTitle: styles.programaBannerTitle,
                bannerMessage: styles.programaBannerMessage
            }}
        />
    );
}

export default Programa;
