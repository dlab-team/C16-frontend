import Link from 'next/link';
import styles from './page.module.css';
import { IoIosArrowForward } from "react-icons/io";
import HomeBanner from './components/HomeBanner/HomeBanner';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <HomeBanner />
        {/* ----- Welcome Section ----- */}

        <section className={styles.welcome_section}>
          <h1 className={styles.welcome_title}>Bienvenid@</h1>
          <p className={styles.welcome_p}>
            Sabemos lo desafiante que puede ser asumir este rol, por eso estamos para ayudarte en cada paso del camino.
          </p>
        </section>
      </div>

      {/* ----- Home Card Section ----- */}

      <section className={styles.home_cards}>
        <div className={styles.academia}>
          <Link href='/academia' className={styles.link}>
            <span className={styles.text_link}>Academia</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            Revisa videos, guías y material descargable
          </p>
        </div>

        <div className={styles.foro}>
          <Link href='/foro/recientes' className={styles.link}>
            <span className={styles.text_link}>Foro</span>
            <button className={styles.arrow_btn}>
              <IoIosArrowForward className={styles.arrow_btn} />
            </button>
          </Link>
          <p className={styles.cards_p}>
            Entabla conversaciones con otros cuidadores, pregunta o responde
            preguntas de otros.
          </p>
        </div>
      </section>
    </main>
  );
}
