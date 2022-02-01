import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
    product: {
        productId: string;
        amount: string;
    };
}

export default function Home({ product }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | ig.news</title>
            </Head>
            <main className={styles.contentConteiner}>
                <section className={styles.hero}>
                    <span>👏 Olá, seja bem vindo</span>
                    <h1>
                        Notícias sobre o universo <span>React</span>
                    </h1>
                    <p>
                        Garanta seu acesso a todas as publicações
                        <br />
                        <span>por {product?.amount} mensal</span>
                    </p>
                    <SubscribeButton />
                </section>

                <img src="/images/avatar.svg" alt="Mulher Programando" />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve(
        "price_1JnBoNJyqcNOjjEN127FGdWq",
        {
            expand: ["product"],
        }
    );

    const product = {
        id: price.id,
        amount: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price.unit_amount / 100),
    };

    return {
        props: {
            product,
        },
        revalidate: 60 * 60 * 24, // 24 hours
        // quando tempo em segundo que eu vou reconstruir a página
    };
};
