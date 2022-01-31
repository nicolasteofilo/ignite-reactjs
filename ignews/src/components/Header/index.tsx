import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
            <Link href="/">
                <img src="/images/logo.svg" alt="ig.news"/>
          </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}