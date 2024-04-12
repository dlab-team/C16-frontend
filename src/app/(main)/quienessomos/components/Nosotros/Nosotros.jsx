// Nosotros.jsx

import React from 'react';
import styles from './Nosotros.module.css';

const Nosotros = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Quiénes Somos</h2>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et leo efficitur commodo.
            </p>
            <h2 className={styles.heading}>Misión y Visión</h2>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et leo efficitur commodo.
            </p>
            <h2 className={styles.heading}>Nuestra Historia</h2>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, elit ac fringilla sollicitudin, justo risus mattis nisi, eu convallis nulla velit non urna. Curabitur vitae ante quam. Vivamus nec augue et leo efficitur commodo.
            </p>
        </div>
    );
};

export default Nosotros;
