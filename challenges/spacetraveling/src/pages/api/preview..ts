/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import Prismic from '@prismicio/client';

import { Document } from '@prismicio/client/types/documents';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;
export const accessToken = process.env.PRISMIC_ACESS_TOKEN;

function linkResolver(doc: Document): string {
  if (doc.type === 'posts') {
    return `posts/${doc.uid}`;
  }
  return '/';
}

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOption(req, accessToken));

const createClientOption = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const acessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...acessTokenOption,
  };
};

const Preview = async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}` });
  res.end();
};

export default Preview;
