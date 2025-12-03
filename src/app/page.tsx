"use client";
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const SceneLoader = dynamic(() => import('@/components/SceneLoader'), { ssr: false });

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <LanguageSwitcher />
      <SceneLoader />

      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className={styles.title} variants={fadeInUp}>
          {t.hero.title}
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          style={{ whiteSpace: 'pre-line' }}
          variants={fadeInUp}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div style={{ marginTop: '2rem' }} variants={fadeInUp}>
          <a href="/whitepaper" className={styles.buttonPrimary}>
            {t.hero.readWhitepaper}
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          {t.sections.gap.title}
        </motion.h2>
        <div className={styles.grid}>
          {t.sections.gap.cards.map((card, i) => (
            <motion.div key={i} className={styles.card} variants={cardVariant}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          {t.sections.solution.title}
        </motion.h2>
        <div className={styles.grid}>
          {t.sections.solution.cards.map((card, i) => (
            <motion.div key={i} className={styles.card} variants={cardVariant}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          {t.sections.product.title}
        </motion.h2>
        <motion.div className={styles.card} style={{ width: '100%' }} variants={cardVariant}>
          <h3>{t.sections.product.mainCard.title}</h3>
          <p>{t.sections.product.mainCard.text}</p>
        </motion.div>
        <div className={styles.grid} style={{ marginTop: '2rem' }}>
          {t.sections.product.cards.map((card, i) => (
            <motion.div key={i} className={styles.card} variants={cardVariant}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          {t.sections.tokenomics.title}
        </motion.h2>
        <div className={styles.tokenomics}>
          {t.sections.tokenomics.cards.map((card, i) => (
            <motion.div key={i} className={styles.tokenCard} variants={cardVariant}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          {t.sections.roadmap.title}
        </motion.h2>
        <div className={styles.roadmap}>
          {t.sections.roadmap.phases.map((phase, i) => (
            <motion.div key={i} className={styles.roadmapItem} variants={cardVariant}>
              <div className={styles.phase}>{phase.phase}</div>
              <h3>{phase.title}</h3>
              <ul>
                {phase.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className={styles.footer}>
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
