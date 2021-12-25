import { NextApiResponse } from 'next';

async function exit(_, res: NextApiResponse): Promise<void> {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  res.writeHead(307, { Location: '/' });
  res.end();
}

export default exit;
