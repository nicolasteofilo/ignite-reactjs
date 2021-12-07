import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/client'
 
import styles from './styles.module.scss';

export function SingInButton() {
    const [session] = useSession()

    return session ? (
        <>
            <button
                type="button"
                className={styles.singInButton}
            >
                <FaGithub color="#04d361" />
                {session?.user?.name}
                <FiX onClick={() => signOut()} color="#737380" className={styles.closeIcon} />
            </button>
            <img className={styles.imageAvatar} src={session?.user?.image} alt="" />
        </>
    ) : (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Login com GitHub
        </button>
    );
}