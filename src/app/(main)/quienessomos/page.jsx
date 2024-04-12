'use client';

import React, { useState, useEffect } from "react";
import DinamicBanner from "../components/DinamicBanner/DinamicBanner";
import styles from "../components/DinamicBanner/DinamicBanner.module.css";

    function QuienesSomos() {
        return (
            <DinamicBanner
                imageSrc='/assets/images/banner/quienessomosbanner.png'
                title='Sobre Nosotros'
                message= ''
                customStyles={{
                    desktopContainer: styles.quienesSomosDesktopContainer,
                    bannerImg: styles.quienesSomosBannerImg,
                    bannerTextBox: styles.quienesSomosBannerTextBox,
                    bannerTitle: styles.quienesSomosBannerTitle,
                    bannerMessage: styles.quienesSomosBannerMessage
                }}
            />
        );
    }

    export default QuienesSomos;

