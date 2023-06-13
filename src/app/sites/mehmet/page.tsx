import LayoutWrapper from "@/containers/layout/LayoutWrapper";
import { postRequestFake } from "@/services/core/api.service";
import { ResolvingMetadata, Metadata } from "next";
import React from "react";

import { notFound } from "next/navigation";
type Props = {
  params: { site: string };
  searchParams: { site: string; title: string };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const subdomain = searchParams.site;

  const hotel = await postRequestFake("subdomains?site=" + subdomain);

  if (!hotel[0]?.hotelName) return { title: "404" };
  return {
    title: hotel[0].hotelName,
  };
}
export default async function NecimPage({ params, searchParams }: Props) {
  console.log("params", params);
  console.log("searchParams", searchParams);
  const suAnkiTarih = new Date();
  const saat = suAnkiTarih.getHours();
  ``;
  const dakika = suAnkiTarih.getMinutes();
  const saniye = suAnkiTarih.getSeconds();
  const hotel = await getHotel(searchParams.site).then((res) => res[0]);
  if (!hotel) return notFound();
  return (
    <>
      <LayoutWrapper
        title={hotel.hotelName}
        favicon={hotel.FAVICON}
        primaryColor={undefined}
      >
        OZELPAGE {params.site} {saat}:{dakika}:{saniye}
      </LayoutWrapper>
    </>
  );
}
async function getHotel(subdomain: string) {
  return await postRequestFake("subdomains?site=" + subdomain);
}
