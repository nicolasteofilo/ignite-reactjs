import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';

import { RichText } from "prismic-dom";

import { getPrismicClient } from "../../../services/prismic";

import styles from '../post.module.scss'
import { useEffect } from "react";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function PostPreview({ post }: PostPreviewProps) {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
          className={`${styles.postContent} ${styles.previewContent}`}
          dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.continueReading}>
            Gostaria de continuar lendo? 
            <Link href="/">
              <a>Inscreva-se agora 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // as paths é o caminho que eu quero que seja gerado durante a build do projeto
  return {
    paths: [
      // { params: { slug: "como-renomear-varios-arquivos-de-uma-vez-usando-o-terminal" } },
    ],
    fallback: 'blocking', // 'true', 'false' , 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('publication', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
          day: "2-digit",
          month: "long",
          year: "numeric",
      }
  ),
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}