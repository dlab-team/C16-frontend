'use client'

import Image from 'next/image'
import React, { useState } from 'react'

// URL de la imagen por defecto
const defaultImage = "/assets/images/foro/noneImage.svg"

function PostImage({ src = defaultImage, alt, ...props }) {
    // Estado para manejar la URL de la imagen
    const [imgSrc, setImgSrc] = useState(src)


    // Función para manejar el error de carga de la imagen
    const handleError = () => {
        setImgSrc(defaultImage)
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
}

export default PostImage
