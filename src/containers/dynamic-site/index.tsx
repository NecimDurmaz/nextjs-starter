import { Meta } from "@/model/seo";
import { ParsedUrlQuery } from "querystring";
import type { GetStaticPaths, GetStaticProps } from "next";
import JsonPreview from "@/components/(core)/JsonPreview";
interface PathProps extends ParsedUrlQuery {
  site: string;
}

interface PostProps {
  stringifiedData: string;
  stringifiedAdjacentPosts: string;
}
interface IndexProps {
  stringifiedData: string;
}

export default function DynamicSiteContainer({ stringifiedData }) {
  return (
    <>
      <JsonPreview data={stringifiedData} />
    </>
  );
}

export const getServerSideProps: any = async ({ params }) => {
  const data = {
    id: 1,
  };
  if (!data) return { notFound: true, revalidate: 10 };

  return {
    props: {
      stringifiedData: JSON.stringify({
        ...data,
      }),
    },
    revalidate: 3600,
  };
};
