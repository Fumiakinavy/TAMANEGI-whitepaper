"use client";
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.switcher}>
            <button
                className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <span className={styles.divider}>/</span>
            <button
                className={`${styles.button} ${language === 'jp' ? styles.active : ''}`}
                onClick={() => setLanguage('jp')}
            >
                JP
            </button>
        </div>
    );
}
