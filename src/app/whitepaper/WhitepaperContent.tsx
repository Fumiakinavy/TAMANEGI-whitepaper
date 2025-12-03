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
                <Link href="/" className={styles.backLink}>
                    {t.backToHome}
                </Link>
                <article className={styles.markdown}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </div>
        </div>
    );
}
