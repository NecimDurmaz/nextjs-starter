import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";
import { Roboto } from "next/font/google";

const RootLayout = async ({ children }) => {
  return (
    <>
      <html>
        <head></head>
        <body>{children}</body>
      </html>
    </>
  );
};

export default RootLayout;
