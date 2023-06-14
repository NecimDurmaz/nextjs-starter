import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/variables.module.scss";
import "@/styles/global.scss";
import "@/styles/reset.scss";

const RootLayout = async ({ children }) => {
  return (
    <>
      <html>
        <head>{/* <FaviconComponent /> */}</head>

        <body>{children}</body>
      </html>
    </>
  );
};

export default RootLayout;
