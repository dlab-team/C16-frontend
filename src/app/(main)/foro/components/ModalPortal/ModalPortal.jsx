import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


/* Este componenete es para asegurarnos que el modal siempre esté por encima de todos los elementos del sitio */
const ModalPortal = ({ children }) => {
    const [modalContainer] = useState(document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(modalContainer);
        return () => {
            document.body.removeChild(modalContainer);
        };
    }, [modalContainer]);

    return ReactDOM.createPortal(children, modalContainer);
};

export default ModalPortal