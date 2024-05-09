'use client'
import { useState, useRef, useEffect } from 'react';
import styles from './SetImageModal.module.css';

const SetImageModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    const [archivoURL, setArchivoURL] = useState(null);
    const inputRef = useRef(null); // Referencia para el input de archivo

    const [image, setImage]= useState(null)

    // Manejo del evento de cambio de archivo
    const manejarCambioArchivo = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setImage(archivo)
            const nuevaURL = URL.createObjectURL(archivo);
            setArchivoURL(nuevaURL);
        }
    };
    const handleEdit=()=>{
        onConfirm(image)
    }

    // Limpia la URL temporal cuando el modal se cierre
    useEffect(() => {
        return () => {
            if (archivoURL) {
                URL.revokeObjectURL(archivoURL);
            }
        };
    }, [archivoURL]);

    // Disparar el input de archivo cuando el botón personalizado sea clickeado
    const abrirSelectorArchivos = () => {
        inputRef.current.click();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <button className={styles.closeBtn} onClick={onClose}></button>
                </div>

                <div className={styles.modalInfo}>
                    <h3 className={styles.title}>Editar imagen de perfil</h3>
                    {/* Oculta el input original */}
                    <input
                        type="file"
                        id="archivo"
                        accept="image/*"
                        ref={inputRef} // Usa la referencia para acceder a este input
                        style={{ display: 'none' }} // Oculta el input
                        onChange={manejarCambioArchivo}
                    />
                    {/* Crea un botón personalizado */}
                    <button className={styles.customUploadButton} onClick={abrirSelectorArchivos}>
                        Seleccionar Imagen
                    </button>
                    <div>
                        {archivoURL && <img src={archivoURL} alt="Vista previa" className={styles.imgPreview}/>}
                    </div>
                </div>

                <div className={styles.modalActions}>
                    <button className={styles.closeButton} onClick={onClose}>Cancelar</button>
                    <button className={styles.reportButton} onClick={handleEdit}>Editar</button>
                </div>
            </div>
        </div>
    );
};

export default SetImageModal;
