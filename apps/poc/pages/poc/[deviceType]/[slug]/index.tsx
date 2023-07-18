import os from 'os';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

const Page: NextPage<Props> = ({ hostname, dateTime }) => {
  return (
    <>
      <p>Hostname: {hostname}</p>
      <p>DateTime: {dateTime}</p>
    </>
  );
};

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  const hostname = os.hostname();
  const dateTime = new Date().toLocaleString();
  return {
    props: {
      hostname,
      dateTime,
    },
    revalidate: 30,
  };
}

export const getStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

type Props = {
  hostname: string;
  dateTime: string;
};

export default Page;
