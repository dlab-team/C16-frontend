import styles from "./page.module.css"

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>Seccion 1 - Home</section>
            <section className={styles.section}>Seccion 2 - Home</section>

            <section className={styles.home_cards}>
                <div className={styles.academia}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <div className={styles.link}>
                        <span className={styles.text_link}>Academia</span>
                        <button className={styles.arrow_btn}></button>
                    </div>
                </div>

                <div className={styles.foro}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <div className={styles.link}>
                        <span className={styles.text_link}>Foro</span>
                        <button className={styles.arrow_btn}></button>
                    </div>
                </div>

            </section>


        </main>
    );
}
