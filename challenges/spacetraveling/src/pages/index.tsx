import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Prismic from '@prismicio/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';
import { getPrismicClient } from '../services/prismic';

import styles from './home.module.scss';
import common from '../styles/common.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [visibleButton, setVisibleButton] = useState(false);
  console.log(postsPagination);

  useEffect(() => {
    if (postsPagination.next_page) {
      setVisibleButton(true);
    }
  }, []);

  return (
    <main className={common.container}>
      <div className={styles.post}>
        {postsPagination.results.map(post => (
          <Link href={`/post/${post.uid}`} key={post.uid}>
            <a>
              <strong>{post.data.title}</strong>
              <span>{post.data.subtitle}</span>
              <ul>
                <FiCalendar color="#BBBBBB" />
                <li>
                  {format(
                    new Date(post.first_publication_date),
                    'dd MMM yyyy',
                    {
                      locale: ptBR,
                    }
                  )}
                </li>
                <FiUser className={styles.userIcon} color="#BBBBBB" />
                <li>{post.data.author}</li>
              </ul>
            </a>
          </Link>
        ))}
      </div>
      {visibleButton ? (
        <button type="button">Carregar mais posts</button>
      ) : null}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      pageSize: 1, // posts per page
    }
  );

  const postsPagination = {
    next_page: response.next_page,
    results: response.results,
  };

  return {
    props: {
      postsPagination,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
