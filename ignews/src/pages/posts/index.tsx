import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts(){
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container} >
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Title Post</strong>
                        <p>Vou contar da minha experiência pessoal até aqui para me mudar para a Suécia, desde como funcionam os aluguéis e como se programar financeiramente, até sobre como se preparar para os imprevistos.
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Title Post</strong>
                        <p>Vou contar da minha experiência pessoal até aqui para me mudar para a Suécia, desde como funcionam os aluguéis e como se programar financeiramente, até sobre como se preparar para os imprevistos.
                        </p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Title Post</strong>
                        <p>Vou contar da minha experiência pessoal até aqui para me mudar para a Suécia, desde como funcionam os aluguéis e como se programar financeiramente, até sobre como se preparar para os imprevistos.
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query(
        [Prismic.Predicates.at('document.type', 'publication')], {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        },
    )

    console.log(JSON.stringify(response, null, 2));

    return {
        props: {

        }
    }
}