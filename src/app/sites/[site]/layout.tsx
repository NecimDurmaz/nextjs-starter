import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { getHotelListPostMan } from "@/services/core/api.service";
import BasketContainer from "@/components/(core)/basket/basket";
import Navbar from "@/components/(core)/navbar";

const RootLayout = async ({ children, params }) => {
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <Navbar siteName={params.title} />
        </div>
        <div className='col-8'>{children}</div>
        <div className='col-4'>
          <BasketContainer />
        </div>
      </div>
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
