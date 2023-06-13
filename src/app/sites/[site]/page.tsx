import ProductList from "@/components/(product)/product-list/product-list";
import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { getHotelList, postRequestFake } from "@/services/core/api.service";
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
  console.log("generateMetadata");
  // read route params
  const subdomain = params.site;
  // fetch data
  const hotel = await postRequestFake("subdomains?site=" + subdomain);
  if (!hotel[0]?.hotelName) return { title: "404" };
  return {
    title: hotel[0].hotelName,
    description: hotel[0].hotelName,
    openGraph: {
      images: [
        "https://www.elektraweb.com/wp-content/uploads/2019/06/favicon.ico",
      ],
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const hotel = await getHotel(params.site).then((res) => {
    return res[0];
  });
  // const deneme = await getHotelList();
  console.log("v1");

  if (!hotel) return notFound();
  return (
    <>
      <LayoutWrapper
        title={hotel.hotelName}
        favicon={hotel.FAVICON}
        primaryColor={hotel.primaryColor}
      >
        {/* <JsonPreview data={hotel} /> */}
        {/* <AddTicketButton /> */}
        {/* <h1>{getTime()}</h1> */}
        <ProductList hotelId={hotel.hotelId} />
      </LayoutWrapper>
    </>
  );
}

async function getHotel(subdomain: string) {
  return await postRequestFake("subdomains?site=" + subdomain);
}

export async function generateStaticParams() {
  console.log("generateStaticParams");
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
