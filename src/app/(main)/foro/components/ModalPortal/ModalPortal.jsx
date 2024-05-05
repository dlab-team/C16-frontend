'use client'

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
    const [modalContainer, setModalContainer] = useState(null);

    useEffect(() => {
        // Crea un nuevo elemento 'div' para el portal del modal
        const container = document.createElement('div');
        // Agrega el contenedor al final del documento
        document.body.appendChild(container);
        setModalContainer(container);

        // Limpieza: esto se ejecutará cuando el componente se desmonte
        return () => {
            if (document.body.contains(container)) {
                document.body.removeChild(container);
            }
        };
    }, []);

    // Si modalContainer aún no está listo (es decir, aún no se ha montado en el DOM), no renderices el portal
    if (!modalContainer) return null;

    // Una vez que el contenedor está listo, usa ReactDOM.createPortal para renderizar los hijos dentro del contenedor
    return ReactDOM.createPortal(children, modalContainer);
};

export default ModalPortal;
