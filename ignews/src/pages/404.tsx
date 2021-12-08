import styles from './404.module.scss'
import Link from 'next/link';
import { BiLeftArrowCircle } from 'react-icons/bi'

export default function NotFound() {
    return (
        <div className={styles.container} >
            <div>
            <img src="/images/emoji-1.png" alt="" />
            <h1>404</h1>
                <div className={styles.link}>
                <BiLeftArrowCircle size={20} />
                <Link href="/">
                    Voltar para Home
                </Link>
            </div>
            </div>
        </div>
    );
}
