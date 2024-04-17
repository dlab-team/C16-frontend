'use client';

import React, { useState, useEffect } from "react";
import DinamicBanner from "../components/DinamicBanner/DinamicBanner";
import styles from "../components/DinamicBanner/DinamicBanner.module.css";
import Nosotros from '../quienessomos/components/Nosotros/Nosotros'; 
import Carrusel, { imagenesDeEjemplo } from '../quienessomos/components/Carrusel/Carrusel';



    function QuienesSomos() {
        return (
            <div>
                <DinamicBanner
                    imageSrc='/assets/images/banner/quienessomosbanner.png'
                    title='Sobre Nosotros'
                    message=''
                    customStyles={{
                        desktopContainer: styles.quienesSomosDesktopContainer,
                        bannerImg: styles.quienesSomosBannerImg,
                        bannerTextBox: styles.quienesSomosBannerTextBox,
                        bannerTitle: styles.quienesSomosBannerTitle,
                        bannerMessage: styles.quienesSomosBannerMessage,
                    }}
                />
                <Nosotros /> 
                <Carrusel imagenes={imagenesDeEjemplo} /> 
            </div>
        );
    }

    export default QuienesSomos;

