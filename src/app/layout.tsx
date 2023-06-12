import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const RootLayout = async ({ children }) => {
  return (
    <>
      <html>
        <head>{/* <title>layout</title> */}</head>
        <body className={roboto.className}>
          {/* <div>LAYOUT</div> */}
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
