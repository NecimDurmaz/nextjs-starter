import { getLink } from "@/app/api/params/param";
import JsonPreview from "@/components/(core)/JsonPreview";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
interface PathProps extends ParsedUrlQuery {
  site: string;
}

interface IndexProps {
  stringifiedData: string;
}
export default async function SitePage() {
  let asdx = await getLink();
  return (
    <>
      {/* <JsonPreview data={asdx.data} /> */}

      <div>saasddsasdasdad</div>
    </>
  );
}

// export const getStaticProps: GetStaticProps<IndexProps, PathProps> = async ({
//   params,
// }) => {
//   console.log("params", params);
//   if (!params) throw new Error("No path parameters found");

//   const { site } = params;

//   console.log("Caching for site", site);

//   const data = await getLink();
//   if (!data) return { notFound: true, revalidate: 3600 };

//   return {
//     props: {
//       stringifiedData: JSON.stringify(data),
//     },
//     revalidate: 3600,
//   };
// };
