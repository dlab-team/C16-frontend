import styles from "./page.module.css"
import Link from "next/link";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.section_switch} >
                <section className={styles.section}>Seccion carrusel - Home</section>
                <section className={styles.welcome_section}>
                    <h1 className={styles.welcome_title}>Bienvenid@s</h1>
                    <p className={styles.welcome_p}>
                        Lörem ipsum ösegarade agnostistat, myviras om än mydat pängen. Aspludd trir. Ire astropod den lalig presaning: i vigisk. Exoktigt his senän.
                    </p>
                </section>
            </div>

            <section className={styles.home_cards}>
                <div className={styles.academia}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <Link href="/academia" className={styles.link}>
                        <span className={styles.text_link}>Academia</span>
                        <button className={styles.arrow_btn}></button>
                    </Link>
                </div>

                <div className={styles.foro}>
                    <p className={styles.cards_p}>Lörem ipsum ifaforat pseudonomi oaktat kvasinera, antisiligen. Görad krol som vasade: nuse, fast mönde ladat. Däning kontralöst, misosk kahint därför att eurogov. Pretäda astrossa, plus kvasihon.</p>
                    <Link href="/foro" className={styles.link}>
                        <span className={styles.text_link}>Foro</span>
                        <button className={styles.arrow_btn}></button>
                    </Link>
                </div>

            </section>


        </main>
    );
}
