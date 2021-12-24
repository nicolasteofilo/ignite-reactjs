/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
import { GetStaticPaths, GetStaticProps } from 'next';

import Prismic from '@prismicio/client';
import Head from 'next/head';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { RichText } from 'prismic-dom';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  const totalWord = post?.data?.content.reduce((total, contentItem) => {
    // vai me retornar um array de strings
    total += contentItem.heading.split(' ').length;
    const words = contentItem.body.map(tem => tem.text.split(' ').length);
    words.map(word => (total += word));

    return total;
  }, 0);
  console.log(totalWord);
  const readingTime = Math.ceil(totalWord / 200);

  // se pegar no fallback, vai parecer a mensagem de Carregando
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  const formatedDate = format(
    new Date(post.first_publication_date),
    'dd MMM yyyy',
    {
      locale: ptBR,
    }
  );
  return (
    <>
      <Head>
        <title>{post?.data?.title}</title>
      </Head>
      <img
        src={post?.data?.banner?.url || ''}
        alt="Banner Post"
        className={styles.bannerPost}
      />
      <div className={styles.container}>
        <div className={styles.post}>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <div className={styles.informations}>
            <ul>
              <li>
                <FiCalendar color="#BBBBBB" size="20" />
                {formatedDate}
              </li>
              <li>
                <FiUser color="#BBBBBB" size="20" />
                {post?.data?.author}
              </li>
              <li>
                <FiClock color="#BBBBBB" size="20" />
                {`${readingTime} min`}
              </li>
            </ul>
          </div>
          {post?.data?.content.map(content => (
            <article className={styles.postContent} key={content.heading}>
              <h2>{content.heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  // vou procurar em um documento com o tipo posts
  const posts = await prismic.query(
    Prismic.Predicates.at('document.type', 'post')
  );

  const paths = posts.results.map(post => ({
    params: {
      slug: post.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response?.data?.title,
      subtitle: response?.data?.subtitle,
      author: response?.data?.author,
      banner: {
        url: response?.data?.banner.url,
      },
      content: response?.data?.content.map(content => {
        return {
          heading: content.heading,
          body: [...content.body],
        };
      }),
    },
  };

  return {
    props: {
      post,
    },
  };
};
