import { SingInButton } from '../SingInButton';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
    function handleClickImageLogo() {
        window.location.href = '/';
    }

    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent} >
                <Link href="/">
                 <img src="/images/logo.svg" alt="ig.news" />
                </Link>
                <nav>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
                <SingInButton />
            </div>
        </header>
    )
}