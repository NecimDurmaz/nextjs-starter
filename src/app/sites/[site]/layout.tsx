import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { getHotelListPostMan } from "@/services/core/api.service";
import Navbar from "@/components/(core)/navbar";
import { fetchParams } from "@/utils/fetch-params";
import { notFound } from "next/navigation";

const RootLayout = async ({ children, params }) => {
  const param = await fetchParams();
  const hotelList = await getHotelListPostMan();

  const hotel = hotelList.find((hotel) => {
    return hotel.site == params.site;
  });
  // const deneme = await getHotelList();
  if (!hotel) {
    return notFound();
  }

  return (
    <>
      <Navbar siteName={params.site} param={param} />
      {children}
    </>
  );
};

export default RootLayout;

export async function generateStaticParams() {
  const hotelList = await getHotelListPostMan();
  return hotelList.map((hotel) => {
    return { site: hotel.site };
  });
}
