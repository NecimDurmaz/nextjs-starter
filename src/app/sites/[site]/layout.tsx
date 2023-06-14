import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { getHotelListPostMan } from "@/services/core/api.service";

const RootLayout = async ({ children }) => {
  return <> {children}</>;
};

export default RootLayout;

export async function generateStaticParams() {
  const hotelList = await getHotelListPostMan();
  return hotelList.map((hotel) => {
    return { site: hotel.site };
  });
}
