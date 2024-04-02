'use client';

import React, { useState, useEffect } from "react";
import DinamicBanner from "../components/DinamicBanner/DinamicBanner";
import PruebasBanner from "../components/DinamicBanner/PruebasBanner";


function QuienesSomos() {
    const [data, setData] = useState({
        text: "Este es un banner para la página Quiénes somos",
        mobile: false,
        button: true,
    });

    useEffect(() => {
        // Obtiene la ruta a la imagen
        const fetchImage = async () => {
            const imgSrc = await fetch("/assets/images/banner/prueba1.jpeg"); 
            setData({ ...data, imgSrc });
        };

        fetchImage();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "20px" }}></h1>
            <DinamicBanner
                imageSrc="/assets/images/banner/quienessomosbanner.png"
                title="Sobre Nosotros"
                message="Revisa todo el material que tenemos para ti"
                customStyles={{
                    banner: "somos-banner",
                    bannerImg: "somos-img",
                    bannerTextBox: "somos-textbox",
                    bannerTitle: "somos-title",
                    bannerMessage: "somos-message",
                }}
            />
            <PruebasBanner data={data} />
            
        </div>
    );
}

export default QuienesSomos;
