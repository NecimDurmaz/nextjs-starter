import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { getData, getDataBooking, getLink } from "@/app/api/params/param";

import { AddTicketButton } from "@/services/add-ticket-button";
import JsonPreview from "@/components/JsonPreview";
import Navbar from "@/components/navbar";
import { DefaultImage } from "@/model/DefaultImage.model";

const RootLayout = async ({ currentURL }) => {
  let x = await getDataBooking();
  let asdx = await getLink();
  console.log(currentURL);
  let y = await getData(22418); //22419 22418
  // let w = await getLink();
  let navbarImage = y[0].DIGITALMENU_LOGOURL;
  let image: DefaultImage = {
    src: navbarImage,
    alt: "logo",
    width: 100,
    height: 100,
  };

  // console.log(y);
  return (
    <html lang='en'>
      <body>
        <Navbar image={image} />
        <JsonPreview data={asdx} />
        asd {x?.total ? x?.total : "sadads"}
        {x.products.map((item: any) => {
          return <div>{item.title}</div>;
        })}
        <div>saasddsad</div>
        <AddTicketButton />
      </body>
    </html>
  );
};

export default RootLayout;
