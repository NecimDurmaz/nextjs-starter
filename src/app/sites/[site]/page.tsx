import JsonPreview from "@/components/(core)/JsonPreview";
import ProductList from "@/components/(product)/product-list/product-list";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { postRequestFake } from "@/services/core/api.service";
import { ResolvingMetadata, Metadata } from "next";
import { notFound } from "next/navigation";
type Props = {
  params: { site: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const subdomain = params.site;

  // fetch data
  const hotel = await postRequestFake("subdomains?site=" + subdomain);
  if (!hotel[0]?.hotelName) return { title: "404" };
  console.log("hotelname", hotel[0].hotelName);
  return {
    title: hotel[0].hotelName,
  };
}

export default async function SlugPage({ params }: Props) {
  const hotel = await getHotel(params.site).then((res) => res[0]);
  await wait(1000).then(() => {
    console.log("waited");
  });
  if (!hotel) return notFound();
  return (
    <>
      <LayoutWrapper title={hotel.hotelName}>
        <h1>{getTime()}</h1>
        <ProductList hotelId={hotel.hotelId} />
      </LayoutWrapper>
    </>
  );
}

async function getHotel(subdomain: string) {
  return await postRequestFake("subdomains?site=" + subdomain);
}
export async function generateStaticParams() {
  const hotelList = await postRequestFake("subdomains");

  return hotelList.map((hotel) => {
    return { ...hotel };
  });
}

function getTime() {
  const suAnkiTarih = new Date();
  const saat = suAnkiTarih.getHours();
  const dakika = suAnkiTarih.getMinutes();
  const saniye = suAnkiTarih.getSeconds();
  return saat + ":" + dakika + ":" + saniye;
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
