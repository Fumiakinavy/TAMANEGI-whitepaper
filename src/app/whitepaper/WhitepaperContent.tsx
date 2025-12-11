"use client";
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface WhitepaperContentProps {
    contentJp: string;
    contentEn: string;
}

export default function WhitepaperContent({ contentJp, contentEn }: WhitepaperContentProps) {
    const { language, t } = useLanguage();
    const content = language === 'en' ? contentEn : contentJp;

    return (
        <div className={styles.container}>
            <LanguageSwitcher />
            <div className={styles.content}>
                <header className={styles.header}>
                    <p className={styles.kicker}>{t.whitepaper.kicker}</p>
                    <h1 className={styles.heading}>{t.whitepaper.title}</h1>
                    <p className={styles.lead}>{t.whitepaper.lead}</p>
                    <div className={styles.meta}>
                        <span>{t.whitepaper.meta.updated}</span>
                        <span className={styles.dot}>•</span>
                        <span>{t.whitepaper.meta.length}</span>
                        <span className={styles.dot}>•</span>
                        <span>{t.whitepaper.meta.format}</span>
                    </div>
                    <div className={styles.links}>
                        <Link href="/" className={styles.backLink}>
                            {t.backToHome}
                        </Link>
                    </div>
                </header>
                <article className={styles.markdown} id="content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </div>
        </div>
    );
}
