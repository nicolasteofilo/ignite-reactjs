import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | ig.news</title>
            </Head>
            <main className={styles.contentConteiner} >
                <section className={styles.hero}>
                    <span>👏 Olá, seja bem vindo</span>
                    <h1>Notícias sobre o universo <span>React</span></h1>
                    <p>
                        Garanta seu acesso a todas as publicações
                        <br />
                        <span>por R$9.90 mensal</span>
                    </p>

                </section>

                <img src="/images/avatar.svg" alt="Mulher Programando" />
            </main>
        </>
    )
}
